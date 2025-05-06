import React, { useState, useCallback } from 'react';
import * as tf from '@tensorflow/tfjs';
import { ModelContext } from './detection/context/model-context';
import Selector from './detection/utils/Selector';
import LoadingSpinner from './detection/utils/LoadingSpinner';

const MODEL_URL = process.env.PUBLIC_URL + '/detection/';
const LABELS_URL = MODEL_URL + 'labels.json';
const MODEL_JSON = MODEL_URL + 'model.json';

const Detect = () => {
  const [model, setModel] = useState(null);
  const [labels, setLabels] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState('');

  const fetchModel = useCallback((model) => {
      setModel(model);
  }, []);

  const fetchLabels = useCallback((labels) => {
      setLabels(labels);
  }, []);

  const selectMode = useCallback((selected) => {
      setSelected(selected)
  }, [])

  const loadModel = async () => {
    setLoading(true);
    const savedModel = localStorage.getItem('animal_detector');
    const savedLabels = localStorage.getItem('animal_detector_labels');
    if (savedModel && savedLabels) {
      const model = await tf.loadGraphModel('indexeddb://animal_detector');
      let labels_json = JSON.parse(savedLabels);
      fetchModel(model);
      fetchLabels(labels_json)
      console.log("saved animal detector found")
    } else {
      // Loading Model for first time
      const model = await tf.loadGraphModel(MODEL_JSON);
      fetchModel(model);
      const response = await fetch(LABELS_URL);
      let labels_json = await response.json();
      fetchLabels(labels_json)
      localStorage.setItem('animal_detector', true);
      model.save('indexeddb://animal_detector')
      localStorage.setItem('animal_detector_labels', JSON.stringify(labels_json));
    }
    setLoading(false);
  }

  return (
      <ModelContext.Provider
        value={{
          model: model,
          fetchModel: fetchModel,
          labels: labels,
          fetchLabels: fetchLabels,
          selected: selected,
          selectMode: selectMode
        }}>
          <div className="header-div">
            <h1 className="demo-title">Wildlife Detection</h1>
            <div className="header-subtitle">
              <span className="model-badge">GoogleNet Model</span>
              <p>Identify wildlife species in real-time with advanced AI</p>
            </div>
          </div>
          <div>
            {model ? (
              <div>
                <Selector />
              </div>
            ) : (
              <div className="center-div load-div">
                  {loading ? (
                    <div className="loading-container">
                      <LoadingSpinner />
                      <div className="loading-message">
                        <p>Loading Wildlife Detection Model</p>
                        <span>Please wait while we prepare the AI model...</span>
                      </div>
                    </div>
                  ) : (
                    <div className="start-container">
                      <h2>Ready to Detect Wildlife?</h2>
                      <p>Our AI model can identify various wildlife species in images, videos, or through your camera.</p>
                      <button className="css-btn" onClick={loadModel}>
                        <div style={{ fontSize: '16px', fontWeight: '500' }}>Start Detection</div>
                        <div style={{ fontSize: '14px', fontWeight: '400', marginTop: '5px' }}>6 MB</div>
                      </button>
                    </div>
                  )}
              </div>
            )}
          </div>
      </ModelContext.Provider>
  );
}

export default Detect;
import { useEffect } from 'react';

export default function FilloutForm() {
  useEffect(() => {
    // Load the Fillout embed script
    const script = document.createElement('script');
    script.src = 'https://server.fillout.com/embed/v1/';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove the script when component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      data-fillout-id="qDEnnGXjUAus"
      data-fillout-embed-type="popup"
      data-fillout-button-text="See What's Possible"
      data-fillout-dynamic-resize
      data-fillout-button-color="#F57D05"
      data-fillout-button-size="medium"
      data-fillout-button-float="top-right"
      data-fillout-inherit-parameters
      data-fillout-popup-size="medium"
    />
  );
}

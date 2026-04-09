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
      data-fillout-button-text="Click to See What Is Possible "
      data-fillout-dynamic-resize
      data-fillout-button-color="#FF8812"
      data-fillout-button-size="large"
      data-fillout-button-float="bottom-left"
      data-fillout-inherit-parameters
      data-fillout-popup-size="large"
    />
  );
}

import React, { useState } from "react";

function Subscribe() {
  const [hasSubscribed, setHasSubscribed] = useState(false);

  return (
    <div className="mb-4 mb-4">
      <button
        className="btn btn-success"
        type="button"
        onClick={() => setHasSubscribed(!hasSubscribed)}
      >
        {hasSubscribed && <>✓ </>}
        Subscribe{hasSubscribed && <>d</>}
      </button>
    </div>
  );
}

export default Subscribe;

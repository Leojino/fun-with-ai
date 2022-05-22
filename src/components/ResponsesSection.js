import React from "react";

export default function ResponsesSection({ data, loadingSkeleton }) {
  return (
    <section className="response-wrapper mt-2">
      <h4>Responses</h4>
      <div className="responses">
        {loadingSkeleton}
        {data.length > 0
          ? data.map((r, index) => (
              <div className="response-card p-3 mb-2 rounded-1" key={index} tabIndex="0">
                <div className="row">
                  <div className="col-3">
                    <strong>Prompt:</strong>
                  </div>
                  <div className="col-9">{r.prompt}</div>
                </div>
                <div className="row mt-1">
                  <div className="col-3">
                    <strong>Response:</strong>
                  </div>
                  <div className="col-9">
                    {r.response.map((r, i) => (
                      <div key={i}>{r}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))
          : "Enter some text to generate a response."}
      </div> 
    </section>
  );
}

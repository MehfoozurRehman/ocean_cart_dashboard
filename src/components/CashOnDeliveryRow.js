import React from "react";
import Button from "./Button";
import { Nav } from "react-bootstrap";

export default function CashOnDeliveryRow() {
  return (
    <Nav.Link className="panel__main__row">
      <div className="panel__main__row__entry">#23242</div>
      <div className="panel__main__row__entry">$345</div>
      <div className="panel__main__row__entry">27 May 2020</div>
      <div className="panel__main__row__entry">
        <div className="panel__main__row__entry__cta">
          <Button
            variant="link-btn"
            placeholder="Show"
            toPath="/dashboard/cod-details"
          />
          <div className="panel__main__row__entry__cta__divider"></div>
          <Button
            variant="link"
            toPath="/dashboard/edit-cod"
            placeholder="Edit"
          />
          <div className="panel__main__row__entry__cta__divider"></div>
          <Button variant="btn-delete" placeholder="Remove" />
        </div>
      </div>
    </Nav.Link>
  );
}

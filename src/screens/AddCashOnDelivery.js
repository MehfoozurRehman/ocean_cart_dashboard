import React from "react";
import "./AddCoupon.scss";
import Button from "../components/Button";
import Select from "react-select";
import InputboxComponent from "../components/Inputbox";

export default function AddCashOnDelivery({ screenName }) {
  const Options = [
    { value: "Fixed Cart Discount", label: "Fixed Cart Discount" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const [showCatagoryEdit, setShowCatagoryEdit] = React.useState(false);
  return (
    <div className="panel__conatainer">
      <div className="panel__heading">{screenName}</div>
      <div className="panel__main__add__product">
        <div className="panel__main__add__product__col__xl">
          <div className="input__field">
            <label htmlFor="" className="input__field__label">
              Amount
            </label>
            <InputboxComponent
              placeholder="$345"
              ClassName="input__box"
              type="text"
            />
          </div>
          <div className="input__field">
            <label htmlFor="" className="input__field__label">
              User
            </label>
            <Select
              // defaultValue={[colourOptions[2], colourOptions[3]]}
              name="colors"
              options={Options}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
          <div className="input__field">
            <label htmlFor="" className="input__field__label">
              Currency
            </label>
            <InputboxComponent
              placeholder="USD"
              ClassName="input__box"
              type="text"
            />
          </div>
          <div className="input__field">
            <label htmlFor="" className="input__field__label">
              Verified By
            </label>
            <InputboxComponent
              placeholder="(id)"
              ClassName="input__box"
              type="text"
            />
          </div>
          <div className="input__field">
            <label htmlFor="" className="input__field__label">
              Admin Notes
            </label>
            <InputboxComponent
              placeholder="Note"
              ClassName="input__box"
              textarea="textarea"
            />
          </div>
        </div>
        <div className="panel__main__add__product__col">
          <div className="">
            <div className="input__field">
              <Button placeholder="Save" variant="btn" />
            </div>
            <div className="input__field">
              <Button placeholder="Discard" variant="upload-btn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

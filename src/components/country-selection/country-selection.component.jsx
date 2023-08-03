import { useLocation } from "react-router-dom";
import "./country-selection.styles.scss";
import { Button } from "shards-react";

function CountrySelection({ getChangeSiteResponse, country }) {
  //
  const countryURLParam = country;

  function codeToText(countryCode) {
    if (countryCode.toLowerCase().includes("usa")) {
      return "U.S";
    } else {
      return "Canadian";
    }
  }

  function targetCountry() {
    var target = "";
    if (countryURLParam.toLowerCase().includes("can")) {
      target = codeToText("usa");
    } else {
      target = codeToText("CAN");
    }

    return target;
  }

  return (
    <div className="country-selection-container">
      <h3 className="country-prompt-text">
        Are you sure you want to change country?
      </h3>
      <h5 className="country-prompt-text">
        You will be redirected to the {targetCountry()} site of Germaines
        Restaurant Supply.
      </h5>
      <h5 className="country-prompt-text">Do you wish to continue?</h5>
      <div className="country-selection-btns">
        <Button primary onClick={() => getChangeSiteResponse(true)}>
          Yes
        </Button>{" "}
        {/* sends change of country confirmation as bool to navbar*/}
        <Button primary onClick={() => getChangeSiteResponse(false)}>
          No
        </Button>
      </div>
    </div>
  );
}

export default CountrySelection;

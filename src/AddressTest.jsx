import React from "react";

const AddressFreeForm = () => {
  //state = {};

  const stateList = {
    " JOHOR": true,
    " SELANGOR": true,
    " NEGERI SEMBILAN": true,
    " KELANTAN": true,
    " KEDAH": true,
    " MELAKA": true,
    " PERAK": true,
    " PERLIS": true,
    " PENANG": true,
    " TERENGGANU": true,
    " SARAWAK": true,
    " PAHANG": true,
    " SABAH": true
  };

  const addressTest = addr => {
    let r = {
      apt: null,
      section: null,
      postcode: null,
      city: null,
      state: null
    };
    let addressComponents = addr.split(",");
    r.apt = addressComponents[0];
    r.section = addressComponents[1];
    r.postcode = !isNaN(addressComponents[2]) ? addressComponents[2] : "";
    r.city = addressComponents[3];
    r.state =
      // addressComponents[4] && addressComponents[4].toUpperCase() ===
      // " SELANGOR" ? addressComponents[4] : "";
      addressComponents[4] && stateList[addressComponents[4].toUpperCase()]
        ? addressComponents[4]
        : "";
    return r;
  };

  // render() {
  let address = [
    "No Q1 Apt Sri Orkid, Sek BB18, 3444, Rawang, Selangor",
    "No 23, Jalan Bukit Beruntung"
  ];
  // let split = address.split(",");
  // let number = split[0];
  // let name = split[1];
  // for (let i = 2; i < split.length - 1; i++) name += " " + split[i];
  // let type = split[split.length - 1];
  // address.forEach(function(x) {
  //   console.log(addressTest(x));
  // });

  return (
    <div>
      <div>
        {address.map(obj => {
          console.log(addressTest(obj));
          return (
            <div>
              {addressTest(obj).apt},{addressTest(obj).section},
              {addressTest(obj).postcode},{addressTest(obj).city},
              {addressTest(obj).state}
            </div>
          );
        })}
      </div>
    </div>
  );
  // }
};

export default AddressFreeForm;

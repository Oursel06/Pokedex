import { Select } from "@material-ui/core";

function Langue({ languetype }) {

  const handleChange = e => {
    languetype(e.target.value);
    console.log(languetype);
  }

  return (
    <div className="App">
      <b>Langage </b>
      <Select onChange={handleChange}>
        <option value="fr">FR</option>
        <option value="es">ES</option>
        <option value="en">EN</option>
        <option value="it">IT</option>
        <option value="de">DE</option>
        <option value="ko">KO</option>
        <option value="roomaji">ROOMAJI</option>
        <option value="ja">JA</option>
        <option value="zh-Hant">ZH-HANT</option>
        <option value="ja-Hrkt">JA-HRKT</option>
        <option value="zh-Hans">ZH-HANS</option>
      </Select>
    </div>
  );
}

export default Langue;

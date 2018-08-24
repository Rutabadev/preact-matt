import "./style.scss";
import CreaditCardIcon from "preact-icons/md/credit-card"
import DeliciousIcon from "preact-icons/fa/delicious"
import LinkIcon from "preact-icons/ti/link"
import MortarBoardIcon from "preact-icons/go/mortar-board"
import RestaurantIcon from "preact-icons/io/android-restaurant"

export const CssShowcase = () => {
  return (
    <div class="css-showcase">
      <div class="elements-box">
        <button class="primary">primary</button>
        <button class="secondary">secondary</button>
      </div>
      <div class="elements-box">
        <CreaditCardIcon />
        <DeliciousIcon />
        <LinkIcon />
        <MortarBoardIcon />
        <RestaurantIcon />
      </div>
    </div>
  );
};

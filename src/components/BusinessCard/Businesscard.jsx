
import './businesscard.css';

export default function Businesscard(props) {
  const { bgURL, name, email, address, PHnumber, MainTextcolor, profileUrl ,Namecolor} = props;

  return (
    <div className="card-container" style={{backgroundImage: `url(${bgURL})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover', color: MainTextcolor
    }}>


      <div className="main">

        <div className="left">
          <div className="profile" >
            <img src={`${profileUrl}`} />

          </div>
        </div>

        <div className="right">
          <div>
            <h2 style={{color:Namecolor}} >{name}</h2>
            <p id="hero" style={{color:"rgba(77, 77, 77, 1)"}}>Part time hero</p>
            <div className="det">
              <div className="ll">
                <img src="https://w7.pngwing.com/pngs/402/714/png-transparent-email-logo-email-computer-icons-signature-block-mail-miscellaneous-trademark-logo-thumbnail.png" />
                <p> {email}</p>
              </div>
              <div className="ll">
                <img src="https://static.vecteezy.com/system/resources/previews/003/720/476/non_2x/phone-icon-telephone-icon-symbol-for-app-and-messenger-vector.jpg" />
                <p>{PHnumber}</p>
              </div>

              <div className="ll">
                <img src="https://www.iconpacks.net/icons/2/free-location-icon-2955-thumb.png" />
                <p> {address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

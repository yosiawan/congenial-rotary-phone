import MoreVertIcon from "@mui/icons-material/MoreVert";
import formatDob from "../../helpers/dobFormatter";
import "./driverCard.css";

type TDriverCardProps = {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  birthdate: string;
  picture: string;
};

export default function DriverCard(props: TDriverCardProps) {
  const formattedBirthdate = formatDob(new Date(props.birthdate));

  return (
    <div className="driver-card__container">
      <div className="divider">
        <div>
          Driver ID <span className="driver-card__id">{props.id}</span>
        </div>
        <MoreVertIcon />
      </div>
      <div className="driver-card__body">
        <img
          src={props.picture}
          className="driver-card__profile-pic"
          alt={props.firstName + "Profile Picture"}
        />
        <div>
          <div className="driver-card__field">
            <div>Nama Driver</div>
            <div className="driver-card__field-value">
              {props.firstName} {props.lastName}{" "}
            </div>
          </div>
          <div className="driver-card__field">
            <div>Telepon</div>
            <div className="driver-card__field-value">{props.phoneNumber}</div>
          </div>
          <div className="driver-card__field no-mobile">
            <div>Email</div>
            <div className="driver-card__field-value">{props.email}</div>
          </div>
          <div className="driver-card__field no-mobile">
            <div>Tanggal Lahir</div>
            <div className="driver-card__field-value">{formattedBirthdate}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

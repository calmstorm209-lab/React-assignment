
import './Button.css';
import Text from '../Text/Text';

export default function Button(props) {
    const { onClick, textt } = props;

    return (
        <div>
            <button className="but" onClick={onClick}>
                <Text text={textt} color="rgba(255, 255, 255, 1)" type="h1" />
            </button>
        </div>
    );
}

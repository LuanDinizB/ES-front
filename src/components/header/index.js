/* eslint-disable jsx-a11y/alt-text */
import { TextField } from '@mui/material';
import Luan from '../../assets/Luan.png';
import './jcss.css';

 function Header() {
    return (
        <header>
            {/* <img src={Luan} className="imagemLuan"></img> */}
            <h3 className="lancamentodestaque">Lançamentos</h3>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </header>
    )
}

export default Header;
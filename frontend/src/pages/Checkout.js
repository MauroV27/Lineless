import NavHome from '../components/NavHome'
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';

export function Checkout() {

    return (
        <div className="App">
            <NavHome />
            <div style={{ width: '100%', height: '100%', textAlign: 'center' }}>
                <span style={{ color: '#BE4249', fontSize: '34px', fontFamily: 'SF Pro', fontWeight: 700, lineHeight: '26.56px', wordWrap: 'break-word' }}>Pronto!</span>
                <br/>
                <br/>
                <span style={{ color: '#1C1C1E', fontSize: '34px', fontFamily: 'SF Pro', fontWeight: 700, lineHeight: '26.56px', wordWrap: 'break-word' }}>Agora basta retirar o produto.</span>
                <br/>
                <br/>
                <br/>
                <QRCodeSVG
                    // mudar value para URL ou texto de pedido 
                    value={"1 mojito, 2 água, R$12"}
                    size={256}
                    bgColor={"#ffffff"}
                    fgColor={"#000000"}
                    level={"L"}
                    includeMargin={false}
                    imageSettings={{
                        src: "https://www.vhv.rs/dpng/d/455-4553216_forward-slash-symbol-red-crayon-clipart-hd-png.png",
                        x: undefined,
                        y: undefined,
                        height: 24,
                        width: 24,
                        excavate: true,
                    }}
                />
                <br/>
                <br/>
                <br/>
                <Link to='/products'>
                    <Button style={{"background-color":"#4B6C9A", color:"#F2F2F2"}}>
                        Realizar Outra Compra
                    </Button>
                </Link>
            </div>

        </div >
    );
};
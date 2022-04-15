import React from "react";
import { Layout } from "antd";
import {MasinaProps} from "./Overview"
import Masina from "../interface/Interface"

const { Content } = Layout;

const MasinaContent = ({masini}: MasinaProps) => {

    return (
        <Content style={{ padding: '0 24px', display:"flex" , minHeight: 280 }}>
                <div className=" ">
                    <table>
                        <tbody>
                            <tr className="Table-Header">
                                <td>
                                    <h4>Marca</h4>
                                </td>
                                <td>
                                    <h4>Model</h4>
                                </td>
                                <td>
                                    <h4>Anul</h4>
                                </td>
                                <td>
                                    <h4>Caroserie</h4>
                                </td>
                                <td>
                                    <h4>Tranctiune</h4>
                                </td>
                                <td>
                                    <h4>Motor</h4>
                                </td>
                                <td>
                                    <h4>Cutie</h4>
                                </td>
                                
                            </tr>
                    
                            {masini.map(item => {
                                return (
                                    <>
                                    <MasinaItem key={item.id} marca = {item.transportData.marca}
                                    model = {item.transportData.model}
                                    anul = {item.transportData.anul}
                                    caroserie = {item.transportData.caroserie}
                                    tractiune = {item.transportData.tractiune}
                                    motor = {item.motor}
                                    cutie = {item.cutie}
                                    >
                                    </MasinaItem>
                                    <button key={item.id} onClick={()=>{item.updateField('motor', '1.8'); console.log(item); window.location.reload()}}>Shimba motorul</button>
                                    </>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

        </Content>
    )
}


const MasinaItem: React.FC<Masina> = ({marca, model, anul, caroserie, tractiune, motor, cutie }: Masina)=> {
    return<tr>
   <td>
       <h4>{marca}</h4>
   </td>
   <td>
       <h4>{model}</h4>
   </td>
   <td>
       <h4>{anul}</h4>
   </td>
   <td>
       <h4>{caroserie}</h4>
   </td>
   <td>
       <h4>{tractiune}</h4>
   </td>
   <td>
       <h4>{motor}</h4>
   </td>
   <td>
       <h4>{cutie}</h4>
   </td>
</tr>
}

export default MasinaContent;
import * as s from './style'
import { FaInstagram , FaLinkedin , FaGithub, FaCcVisa, FaCcMastercard} from "react-icons/fa";
import { FaPix } from "react-icons/fa6";
import Link from 'next/link'
import React from 'react'


function Footer() {
  return (
    <s.Footer>
        
        <div className="infoLeft">
            <p><span>Nosso Contato: </span> </p>
            <p> Rua Teste Programacao, 51</p>
            <p> Cidade JavaScript, Itaipava, | RJ</p>
            <p>CEP: 11122-421 </p>
            <p>TEL: (24) 0 2233-44-55</p>
        </div>
        <div className="mainInfo">
            <p> Desenvolvido única e exclusivamente para fins Acadêmicos. </p>
            <p> By Guilherme Tavares</p>
            <s.LogosBox>
                <Link href="https://www.instagram.com/gui_tvrs/" target='_blank'> 
                    <FaInstagram size={30}/> 
                </Link>
                <Link href=""> 
                    <FaLinkedin size={30}/> 
                </Link>
                <Link href=""> 
                    <FaGithub size={30} />
                </Link>
            </s.LogosBox>
        </div>
        <div className="infoRight">
            <p> Aceitamos: </p>
            <div className="paymentLogos">
                <FaCcVisa size={35} color={"gray"}/>
                <FaCcMastercard size={35} color={"gray"}/>
                <FaPix size={35} color={"gray"}/>              
            </div>
            <Link href="/Register">Junte-se a Nós</Link>
        </div>
                       
    </s.Footer>
  )
}

export default Footer
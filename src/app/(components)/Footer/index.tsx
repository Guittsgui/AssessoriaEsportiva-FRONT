import * as s from './style'
import { FaInstagram , FaLinkedin , FaGithub} from "react-icons/fa";

import React from 'react'
import Link from 'next/link';

function Footer() {
  return (
    <s.Footer>
        <p> Desenvolvido única e exclusivamente para fins Acadêmicos. </p>
        <p> By Guilherme Tavares</p>
        <s.LogosBox>
            <Link href=""> 
                <FaInstagram size={30}/> 
            </Link>
            <Link href=""> 
                <FaLinkedin size={30}/> 
            </Link>
            <Link href=""> 
                <FaGithub size={30} />
            </Link>
        </s.LogosBox>
                
                
    </s.Footer>
  )
}

export default Footer
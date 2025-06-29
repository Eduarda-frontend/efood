import { createGlobalStyle } from 'styled-components'

export const colors = {
    white: '#ffffff',
    light_orange: '#FFEBD9',
    orange_rose:'#E66767',
}

export const breackpoints = {
    desktop: '1024px',
    tablet: '768px'
  }

const EstiloGlobal = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: Roboto, sans-serif;
        font-size: 14px;
        background-color: #FFF8F2;
        min-width: 640px;

        }
        
        .container{
            margin: auto;
            max-width: 1024px;
            width: 100%;
            box-sizing: border-box;

            @media (max-width:${breackpoints.desktop}){
                padding: 0 16px;
            }

            @media (max-width: ${breackpoints.tablet}){
                max-width: 570px;
            }
        }

            
    }
`


export default EstiloGlobal
import { createGlobalStyle } from 'styled-components'

export const colors = {
    white: '#ffffff',
    light_orange: '#FFEBD9',
    orange_rose:'#E66767',
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
            padding-top: 80px;
            padding-bottom: 120px;
            margin: 0 auto;
            max-width: 1024px;
            width: 100%;
        }

        .divFlex{
            display: flex;
        }

    }
`


export default EstiloGlobal
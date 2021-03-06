import styled from 'styled-components'
import plus from '../../../img/plus.svg';
import minus from '../../../img/minus.svg';

const GuestType = styled.span`
    font-family: "Mulish", sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: #333333;
    display: block;
    margin-block-end: .4rem;
`

const GuestDesc = styled.span`
    font-family: "Mulish", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #bdbdbd;
    display: block;
    margin-block-end: 12px;
`

const GuestBtn = styled.button`
    border: 1px solid #828282;
    border-radius: 4px;
    background-color: #fff;
    color: #828282;
    padding-block: 7.33px;
    padding-inline: 6.33px;
    cursor: pointer;
    width: 23px;
    height: 23px;

    &.minus {
        background-image: url(${minus});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 90%;
    }

    &.plus {
        background-image: url(${plus});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 90%;
    }

`

const GuestForm = styled.div`
    display: flex;
`

export {
    GuestType,
    GuestDesc,
    GuestBtn,
    GuestForm
}
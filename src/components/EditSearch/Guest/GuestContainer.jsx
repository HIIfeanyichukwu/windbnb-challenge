import React from 'react'
import { GuestType, GuestDesc, GuestBtn, GuestForm } from './guestUtil'
import styled from 'styled-components'

const INPUT = styled.input`
    border: none;
    font-family: "Mulish", sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 17.57px;
    color: #333333;
    width: 40px;
    text-align: center;
`

const GuestContainer = ({handleGuestAdd, handleGuestSubtract, adults, children}) => {
  return (
    <div className='guest_container visibility_hidden' id='guest_container'>
        <div className="guest_section">
            <label htmlFor="adults">
                <GuestType>
                    Adults
                </GuestType>
                <GuestDesc>
                    Ages 13 or above
                </GuestDesc>
            </label>
            <GuestForm>
                <GuestBtn
                    className='minus'
                    onClick={handleGuestSubtract}
                    aria-label='minus guest by 1'
                >
                </GuestBtn>
                <INPUT type="number" name="adults" disabled id="adults" value={adults} />
                <GuestBtn 
                    className='plus'
                    onClick={handleGuestAdd}
                    aria-label='add one guest'
                >
                </GuestBtn>
            </GuestForm>
        </div>

        <div className="guest_section">
            <label htmlFor="children">
                <GuestType>
                    Children
                </GuestType>
                <GuestDesc>
                    Ages 2-12
                </GuestDesc>
            </label>
            <GuestForm>
                <GuestBtn  
                    className='minus'
                    onClick={handleGuestSubtract}
                    aria-label='minus guest by 1'>
                </GuestBtn>
                <INPUT type="number" name="children" disabled id="children" value={children} />
                <GuestBtn 
                    className='plus'
                    onClick={handleGuestAdd}
                    aria-label='add one guest'
                >
                </GuestBtn>
            </GuestForm>
        </div>
    </div>
  )
}

export default GuestContainer
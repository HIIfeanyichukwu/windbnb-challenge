import React from 'react'
import styled from 'styled-components'
import StayCard from '../components/StayCard/StayCard'
import NotFound from '../components/NotFound'

const MainElement = styled.main`
    font-family: "Montserrat", sans-serif;
    margin-block-end: 101px;

    & .main_header {
        display: flex;
        justify-content: space-between;
        margin-block-end: 24px;
    }

    &  .main_header_text {
        font-weight: 700;
        font-size: 18px;
        color: #333333;
    }

    & .main_header_side {
        font-weight: 500;
        font-size: 14px;
        color: #4f4f4f;
    }


`

const Main = ({data, number}) => {
    const data_map = data.map(obj => {
        return <StayCard
                    key={obj.title}
                    superHost={obj.superHost}
                    type={obj.type}
                    rating={obj.rating}
                    photo={obj.photo}
                    title={obj.title}
                 />
    })

    if (number > 0)
    {
        number = number - 1;
    }else {
        number = 0;
    }


    return (
        <MainElement className="main">
            <header className="main_header">
                <h1 className="main_header_text">
                    Stays in Finland
                </h1>
                <p className="main_header_side">
                    {number}+ stays
                </p>
            </header>

            <div className="main_grid_container">
                {data_map.length ? data_map : <NotFound />}
            </div>
        </MainElement>
    )
}

export default Main
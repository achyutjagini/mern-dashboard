import React from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Box, useMediaQuery } from "@mui/material"
import { useSelector } from 'react-redux'

const Layout = () => {
    return (
        <div>
            <p> Layout</p>
            {/* <Box display="flex" width="80px" justify-content="center" height="80px" background="white" z-index="1">
            </Box>*/}

        </div>
    )
}

export default Layout

import { Button, createMuiTheme, Tab, Tabs, TextField, ThemeProvider } from "@material-ui/core"
import { useState } from "react"
import SearchIcon from '@material-ui/icons/Search'

function Search() {

    const [type, setType] = useState(0)
    const [page, setPage] = useState(1)
    // const [searchText, setSearchText] = useState("")

    const darkTheme = createMuiTheme({
        palette: {
            type: "dark",
            primary: {
                main: "#fff"
            }
        }
    })

    return (
        <div>
        <ThemeProvider theme ={darkTheme}>
            <div style={{display: "flex", margin: "15px 0"}}>
                <TextField
                    style={{ flex: 1 }}
                    className='searchBox'
                    label="Search"
                    variant="filled"
                />
                <Button variant='contained' style={{marginLeft:10}}> <SearchIcon/>  </Button>
            </div>

            <Tabs 
                value={type} 
                indicatorColor='primary' 
                textColor='primary'
                onChange={(event, newValue) => {
                    setType(newValue);
                    setPage(1)
                }}
            >
                <Tab style={{ width: '50%'}} label="Seach Movies"/>
                <Tab style={{ width: '50%'}} label="Seach Tv Series"/>
            </Tabs>

        </ThemeProvider>
        </div>
    )
}

export default Search

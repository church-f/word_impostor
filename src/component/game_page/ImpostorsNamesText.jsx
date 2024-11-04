import Typography from "@mui/material/Typography";


export default function ImpostorsNamesText(props){
    return(
        <>
            <Typography>
                Altri impostori: {
                    props.impostorsName.map((name)=>{
                        if(name !== props.currentName)
                        return name
                    })
                }
            </Typography>
        </>
    )
}
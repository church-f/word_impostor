import Typography from "@mui/material/Typography";


export default function ImpostorsNamesText(props){
    return(
        <>
            <Typography>
                {t('Altri impostori')}: {
                    props.impostorsName.map((name)=>{
                        if(name !== props.currentName)
                        return name
                    })
                }
            </Typography>
        </>
    )
}
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import { updateSelectedWordCategories } from "../../features/playerSlice";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function AccordionCategory(props) {
    const dispatch = useDispatch()
  const allWords = useSelector((state) => state.player.allWords);
  const selectedWordCategories = useSelector(
    (state) => state.player.selectedWordCategories
  );
  const allCategories = Object.keys(allWords).map((x) => x);


  const handleChange = (e, cat) => {
    let tempCategories = [...selectedWordCategories];
    if (e.currentTarget.checked) {
        tempCategories.push(cat)
    }else{
        tempCategories = tempCategories.filter((x)=>x !== cat)
    }
    dispatch(updateSelectedWordCategories(tempCategories))
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography style={{ display: "flex", alignItems: "center" }}>
            Categorie
          </Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        {allCategories.map((cat) => {
          return (
            <>
              
              <FormControlLabel control={<Checkbox
                  checked={selectedWordCategories.includes(cat)}
                  onChange={(e) => {
                    handleChange(e, cat);
                  }}
                />}
                
                label={cat}/>
                
              
            </>
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
}

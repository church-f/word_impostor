import { useSelector, useDispatch } from "react-redux";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { updatePlayers, addPlayer } from "../../features/playerSlice";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import ItemPlayerList from "./ItemListPlayer";

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "#fff",
  padding: 2,
  width: "maxContent",
});

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  padding: 2 * 2,
  margin: `0 0 ${2}px 0`,
  borderRadius: "3px",
  // background: isDragging ? window.Theme.palette.secondary.main : "#d6d6d6",

  ...draggableStyle,
});

export default function AccordionPlayer(props) {
  const players = useSelector((state) => state.player.playerNames);
  const dispatch = useDispatch();

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(players);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    dispatch(updatePlayers(items));
  };

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
            <Typography style={{display: 'flex', alignItems: 'center'}}>Giocatori</Typography>
            
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                >
                  {players.map((player, index) => (
                    <Draggable
                      key={index}
                      draggableId={index.toString()}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          <ItemPlayerList player={player} players={players} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <IconButton
              variant="contained"
              sx={{width: '100%'}}
              onClick={(e) => {
                dispatch(addPlayer(`Giocatore_${players.length}`));
                e.stopPropagation();
              }}
            >
              <AddIcon color="primary"/>
            </IconButton>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

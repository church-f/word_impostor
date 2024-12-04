import PositionedMenu from "../Menu";
import { useTranslation } from "react-i18next";
import { Typography, Button } from "@mui/material";

export default function AboutUs(props) {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <PositionedMenu />
      </div>
      <div style={{ padding: "20px" }}>
        <Typography variant="h4">{t("Chi siamo")}</Typography>
        <Typography style={{ marginTop: "40px" }}>
          {t("Chi siamo testo")}
        </Typography>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <Button variant="contained" onClick={()=>{window.location.pathname = "/"}}>{t("Inizia a giocare!")}</Button>
        </div>
      </div>
    </>
  );
}

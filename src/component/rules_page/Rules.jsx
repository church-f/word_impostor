import PositionedMenu from "../Menu";
import { useTranslation } from "react-i18next";
import { Typography, Button } from "@mui/material";

export default function Rules(props) {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <PositionedMenu />
      </div>
      <ul
        style={{
          padding: "20px",
          gap: "30px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <Typography variant="h4" style={{ fontWeight: 600 }}>
            {t("titolo regole")}
          </Typography>
          <Typography style={{ marginTop: "20px", fontWeight: 500 }}>
            {t("sottotitolo regole")}
          </Typography>
        </div>

        <div>
          <Typography variant="h5" style={{ fontWeight: 500 }}>
            <li>{t("nome paragrafo 1 regole")}</li>
          </Typography>
          <Typography style={{ marginTop: "20px" }}>
            {t("testo paragrafo 1 regole")}
          </Typography>
        </div>
        <div>
          <Typography variant="h5">
            <li> {t("nome paragrafo 2 regole")}</li>
          </Typography>
          <Typography style={{ marginTop: "20px" }}>
            {t("testo paragrafo 2 regole")}
          </Typography>
        </div>
        <div>
          <Typography variant="h5">
            <li> {t("nome paragrafo 3 regole")}</li>
          </Typography>
          <Typography style={{ marginTop: "20px" }}>
            {t("testo paragrafo 3 regole")}
          </Typography>
        </div>
        <div>
          <Typography variant="h5">
            <li> {t("nome paragrafo 4 regole")}</li>
          </Typography>
          <Typography style={{ marginTop: "20px" }}>
            {t("testo paragrafo 4 regole")}
          </Typography>
        </div>

        <Typography style={{ marginTop: "20px", fontWeight: 500 }}>
          {t("testo finale regole")}
        </Typography>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <Button
            variant="contained"
            onClick={() => {
              window.location.pathname = "/";
            }}
          >
            {t("Inizia a giocare!")}
          </Button>
        </div>
      </ul>
    </>
  );
}

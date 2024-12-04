import PositionedMenu from "../Menu";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";

export default function PrivacyPolicy(props) {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <PositionedMenu />
      </div>
      <div style={{ padding: "20px", gap: "30px", display: 'flex', flexDirection: 'column' }}>
        <div>
          <Typography variant="h4">{t("Privacy policy")}</Typography>
          <Typography style={{ marginTop: "20px" }}>{t("PPIntro")}</Typography>
        </div>

        <div>
          <Typography variant="h5">{t("PPPrimo titolo")}</Typography>
          <Typography style={{ marginTop: "20px" }}>
            {t("PPPrimo testo")}
          </Typography>
        </div>
        <div>
          <Typography variant="h5">{t("PPSecondo titolo")}</Typography>
          <Typography style={{ marginTop: "20px" }}>
            {t("PPSecondo testo")}
          </Typography>
        </div>
        <div>
          <Typography variant="h5">{t("PPTerzo titolo")}</Typography>
          <Typography style={{ marginTop: "20px" }}>
            {t("PPTerzo testo")}
          </Typography>
        </div>
        <div>
          <Typography variant="h5">{t("PPQuarto titolo")}</Typography>
          <Typography style={{ marginTop: "20px" }}>
            {t("PPQuarto testo")}
          </Typography>
        </div>
        <div>
          <Typography variant="h5">{t("PPQuinto titolo")}</Typography>
          <Typography style={{ marginTop: "20px" }}>
            {t("PPQuinto testo")}
          </Typography>
        </div>
        <div>
          <Typography variant="h5">{t("PPSesto titolo")}</Typography>
          <Typography style={{ marginTop: "20px" }}>
            {t("PPSesto testo")}
          </Typography>
        </div>
      </div>
    </>
  );
}

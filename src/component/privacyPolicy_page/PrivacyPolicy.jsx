import PositionedMenu from "../Menu";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";

export default function PrivacyPolicy(props) {
    const { t } = useTranslation()
    return (
        <>
            <div>
                <PositionedMenu />
            </div>
            <div style={{ padding: '20px' }}>
                <Typography variant="h4">{t('Chi siamo')}</Typography>
                <Typography style={{ marginTop: '40px' }} >
                    {t("Chi siamo testo")}
                </Typography>
            </div>
        </>
    )
}
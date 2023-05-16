import { Stack } from "react-bootstrap"
import GeneralSection from "../../layout/GeneralSection"
import WidgetCreator from "../widgets/WidgetCreator"

export default function Overview( props ) {

    return (
        <Stack gap={ 2 }>
            <GeneralSection>
                <h5>Widget creator</h5>
                <WidgetCreator />
            </GeneralSection>
            <GeneralSection>
                <h5>Your Widgets</h5>
            </GeneralSection>
        </Stack>
    )
}
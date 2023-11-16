import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import { Box } from '@chakra-ui/react';
import "../pages/Dashboard.css"

export default function Dashboards() {
    return (
        <Box>
            <PowerBIEmbed
                embedConfig = {
                    {
                        type: 'report', // Supported types: report, dashboard, tile, visual, and qna.
                        id: process.env.DASHBOARD_REPORT_ID,
                        embedUrl: process.env.DASHBOARD_EMBED_URL,
                        accessToken: process.env.DASHBOARD_ACCESS_TOKEN,
                        tokenType: models.TokenType.Aad, // Use models.TokenType.Aad if you're embedding for your organization.
                        settings: {
                            panes: {
                                filters: {
                                    expanded: false,
                                    visible: false
                                }
                            },
                        }
                    }
                }

                eventHandlers = {
                    new Map([
                        ['loaded', function () {
                            console.log('Report loaded');
                        }],
                        ['rendered', function () {
                            console.log('Report rendered');
                        }],
                        ['error', function (event) {
                            console.log(event.detail);
                        }]
                    ])
                }

                cssClassName = {
                    "Embed-container"
                }

                getEmbeddedComponent = {
                    (embeddedReport) => {
                        window.report = embeddedReport;
                    }
                }
            />
        </Box>
    )
}
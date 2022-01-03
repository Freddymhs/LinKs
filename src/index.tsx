import { render } from 'react-dom';
import React, { useEffect, useState } from 'react';
const pool2021 = [
    {
        tag: 'trabajo',
        url: {
            'run exchangeRates': 'http://localhost:4000/local/exchangeRates',
        },
    },
    {
        tag: 'trabajo',
        url: {
            syncPluscargoDeconsolidationMails: 'http://localhost:4000/local/syncPluscargoDeconsolidationMails',
        },
    },
    {
        tag: 'trabajo',
        url: {
            updateCraftDeconsolDate: 'http://localhost:4000/local/updateCraftDeconsolDate',
        },
    },
    {
        tag: 'lectura',
        url: {
            zsh: 'https://kapeli.com/cheat_sheets/Oh-My-Zsh_Git.docset/Contents/Resources/Documents/index',
        },
    },

    {
        tag: 'development',
        url: {
            'seed db': 'http://localhost:4000/local/seedDB',
        },
    },
    {
        tag: 'development',
        url: { 'localhost 3000': 'http://local.teu.ai:3000/panel' },
    },

    {
        tag: 'trabajo',
        url: {
            'my pull request':
                'https://github.com/pulls?q=is%3Aopen+is%3Apr+archived%3Afalse+sort%3Acreated-asc+author%3Afreddymhs',
        },
    },
    {
        tag: 'mochila',
        url: {
            'klog drive': 'https://drive.google.com/drive/my-drive',
        },
    },
    {
        tag: 'lectura',
        url: {
            'doc prisma': 'https://www.prisma.io/docs/concepts/components/prisma-client',
        },
    },
    {
        tag: 'trabajo',
        url: {
            'run casa ideas PO': 'http://127.0.0.1:4000/local/casaideas',
        },
    },
    {
        tag: 'development',
        url: {
            'excel test dev':
                'https://docs.google.com/spreadsheets/d/1QerXce-yyQC1blvu4bJYzb0vaJWnS6RGG3VEHCRLxhY/edit#gid=0',
        },
    },
    {
        tag: 'lectura',
        url: { nexus: 'https://nexusjs.org/' },
    },
    {
        tag: 'trabajo',
        url: { 'run migrate': 'http://localhost:4000/local/migrate' },
    },
    {
        tag: 'trabajo',
        url: {
            'QW cycle': 'https://github.com/teu-ai/webapp/projects/22#card-77952294',
        },
    },
    {
        tag: 'lectura',
        url: {
            'es6 arrays': 'https://medium.com/@alvaro.saburido/set-theory-for-arrays-in-es6-eb2f20a61848',
        },
    },
    {
        tag: 'trabajo',
        url: {
            syncShipmentDocuments: 'http://localhost:4000/local/syncShipmentDocuments',
        },
    },
    {
        tag: 'lectura',
        url: {
            'klog wiki': 'https://github.com/teu-ai/webapp/wiki',
        },
    },
    {
        tag: 'trabajo',
        url: { email: 'https://mail.google.com/mail/u/0/#inbox' },
    },
];
const pool2022 = [
    {
        tag: 'soporte',
        url: {
            'oi api':
                'https://capi.ocean-insights.com/documentation/api_reference/v2/#tag/Containers/paths/~1shipments~1events~1recent~1/get',
        },
    },
    {
        tag: 'mochila',
        url: {
            'notion scrum': 'https://www.notion.so/2ba6bde6d9e7457a9ec1f9ae48b5e002?v=be861da29764459e8eb586c32d91a9f8',
        },
    },
    {
        tag: 'lectura',
        url: {
            'sheet ramda': 'https://geusebi.github.io/ramda-cheat-sheet/dist/',
        },
    },
    {
        tag: 'soporte',
        url: {
            'agregar responsable cobro y pago':
                'https://github.com/teu-ai/webapp/wiki/Como-Agregar-Responsables-de-cobro-y-pago-a-Oficinas-Klog',
        },
    },
    {
        tag: 'soporte',
        url: {
            'agregar conceptos': 'https://github.com/teu-ai/webapp/wiki/Adding-new-Concepts',
        },
    },
    {
        tag: 'lectura',
        url: {
            'guia prisma3': 'https://github.com/teu-ai/webapp/wiki/Prisma-3',
        },
    },
];

// trabajo es lo que mas llegue a usar mientras trabajaba
// development lo que uso en desarrollo
// lectura cosas pendientes que debo leer
// mochila cosas que siempre me serviran tener a la mano mas alla de desarrollar
// soporte es soporte
const importantTitles = ['trabajo', 'development', 'lectura', 'soporte'];

const validateDate = ({ tag, url }) => !!tag && !!url;
const assignPriority = value => importantTitles.indexOf(value) + 1 || 9999;

const newPool = [...pool2021, ...pool2022];

const buildObject = newPool.reduce((acc, { tag, url }) => {
    if (validateDate({ tag, url })) {
        const valueContent = Object.values(url).toString();
        const titleContent = Object.keys(url).toString();
        const finalObject = {
            tag: tag,
            priorityTag: assignPriority(tag),
            content: {
                [titleContent]: valueContent,
            },
        };
        acc.push(finalObject);
    }
    return acc;
}, []);

const sortAllBuildedObjects = buildObject.sort((a, b) => {
    if (a.priorityTag < b.priorityTag) {
        return -1;
    }
    if (a.priorityTag > b.priorityTag) {
        return 1;
    }
    return 0;
});

const allPrioritiesFromObjects = sortAllBuildedObjects.reduce((prev, val) => {
    if (!prev.includes(val.priorityTag)) {
        prev.push(val.priorityTag);
    }
    return prev;
}, []);

const asignObjectToColumnByPriority = allPrioritiesFromObjects.map(priority => {
    const elementFromPriority = sortAllBuildedObjects.reduce((prev, val) => {
        if (priority === val.priorityTag) {
            prev.push(val);
        }
        return prev;
    }, []);

    const column = elementFromPriority.map(({ tag, content }) => {
        return (
            <>
                <div>{tag}</div>
            </>
        );
    });
    return column;
});

function RenderColumns(asignObjectToColumnByPriority) {
    const [first, setfirst] = useState(null);
    const AsignObjectToColumnByPriority = allPrioritiesFromObjects.map(priority => {
        const elementFromPriority = sortAllBuildedObjects.reduce((prev, val) => {
            if (priority === val.priorityTag) {
                prev.push(val);
            }
            return prev;
        }, []);

        return (
            <table border={1}>
                <tr>
                    {elementFromPriority.map((elemento, index) => {
                        return (
                            <>
                                {index === 0 && <p style={{ textAlign: 'center' }}>{elemento.tag}</p>}
                                <p>
                                    <a
                                        style={{ textDecoration: 'underline' }}
                                        target="_blank"
                                        href={Object.values(elemento.content)}
                                        rel="noreferrer">
                                        <button
                                            style={{
                                                // display: 'block',
                                                width: '100%',
                                                borderRadius: '8px',
                                                backgroundColor: '#62EFFF',
                                                borderColor: '#323333',
                                                color: '#323333',
                                                cursor: 'pointer',
                                                textAlign: 'center',
                                            }}>
                                            {Object.keys(elemento.content)}
                                        </button>
                                    </a>
                                </p>
                            </>
                        );
                    })}
                </tr>
            </table>
        );
    });

    // return <div>App</div>;
    return AsignObjectToColumnByPriority;
}

function App() {
    useEffect(() => {
        // console.log("holaa");
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div
                            style={{
                                width: '720px',
                                backgroundColor: '#44EDFE',
                                color: '#323333',
                            }}>
                            <MyDataTable
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                }}>
                                <div style={{ display: 'flex' }}>
                                    <RenderColumns AsignObjectToColumnByPriority={asignObjectToColumnByPriority} />
                                </div>
                            </MyDataTable>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}
const MyDataTable = ({ children }) => <div>{children}</div>;

render(<App />, document.getElementById('root'));

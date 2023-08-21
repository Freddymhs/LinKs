import { render } from "react-dom";
import React, { useState } from "react";
import "./views/assets/global.scss";

// falta
// corrector ortografico

// const [dinamicPool, setDinamicPool] = useState([]);

// const newPool = [...pool2021, ...pool2022];///////////////////llegara

// trabajo es lo que mas llegue a usar mientras trabajaba
// development lo que uso en desarrollo
// lectura cosas pendientes que debo leer
// mochila cosas que siempre me serviran tener a la mano mas alla de desarrollar
// soporte es soporte

function Table({ initialPool, setNewPool, newPool }) {
  const importantTitles = ["trabajo", "development", "lectura", "soporte"];

  const validateDate = ({ tag, url }) => !!tag && !!url;
  const assignPriority = (value) => importantTitles.indexOf(value) + 1 || 9999;

  const useInitialPool = newPool?.length <= initialPool?.length;

  const pooltoUse = useInitialPool ? initialPool : newPool;

  //
  const buildObject = pooltoUse.reduce((acc, { tag, url }) => {
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
  const AsignObjectToColumnByPriority = allPrioritiesFromObjects.map(
    (priority) => {
      const elementFromPriority = sortAllBuildedObjects.reduce((prev, val) => {
        if (priority === val.priorityTag) {
          prev.push(val);
        }
        return prev;
      }, []);

      return (
        <table
          //  border={1}
          style={{ maxWidth: "10px" }} //si quito esto se deforma todoooo
        >
          <tr style={{ width: "10px" }}>
            {elementFromPriority.map((elemento, index) => {
              return (
                <>
                  {index === 0 && (
                    <p style={{ textAlign: "center" }}>{elemento.tag}</p>
                  )}
                  <p>
                    <a
                      style={{ textDecoration: "underline" }}
                      target="_blank"
                      href={Object.values(elemento.content)}
                      rel="noreferrer"
                    >
                      <button className="btn">
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
    }
  );

  return AsignObjectToColumnByPriority;
}

// agregar item
const InputAddItem = ({ initialPool, setNewPool }) => {
  const [newItem, setNewItem] = useState({
    tag: "lectura",
    url: {
      "example name": "www.example.com",
    },
  });
  const handleChangeInput = (event) => {
    if (event.target.name === "tag") {
      setNewItem({ ...newItem, ["tag"]: event.target.value });
    }
    if (event.target.name === "name") {
      const { url } = newItem;
      const preValue = Object.values(url)[0];

      setNewItem({ ...newItem, ["url"]: { [event.target.value]: preValue } });
    }
    if (event.target.name === "url") {
      const { url } = newItem;
      const key = Object.keys(url);
      setNewItem({ ...newItem, ["url"]: { [key]: event.target.value } });
    }
  };

  const createNewPool = () => {
    setNewPool([...initialPool, newItem]);
  };

  return (
    <div className="containerForm">
      <form className="form">
        <fieldset>
          <legend>Nombre</legend>
          <input
            className="input"
            type="text"
            id="name"
            name="name"
            onChange={handleChangeInput}
          />
        </fieldset>

        <fieldset>
          <legend>Url</legend>
          <input
            className="input"
            type="text"
            id="url"
            name="url"
            onChange={handleChangeInput}
          />
        </fieldset>

        <fieldset>
          <legend>Tag</legend>
          <select className="select" name="tag" onChange={handleChangeInput}>
            <option value="trabajo">trabajo</option>
            <option value="development">development</option>
            <option value="lectura">lectura</option>
            <option value="soporte">soporte</option>
            <option value="mochila">mochila</option>
          </select>
        </fieldset>

        <fieldset>
          <input
            className="btn"
            type="submit"
            value="Agregar"
            onClick={(event) => {
              event.preventDefault();
              createNewPool();
              // setNewPool(oldArray => [...oldArray, newItem]);
            }}
          />
        </fieldset>
      </form>
    </div>
  );
};

// main function
function App() {
  const pool2021 = [
    {
      tag: "trabajo",
      url: {
        "run exchangeRates": "http://localhost:4000/local/exchangeRates",
      },
    },
    {
      tag: "trabajo",
      url: {
        syncPluscargoDeconsolidationMails:
          "http://localhost:4000/local/syncPluscargoDeconsolidationMails",
      },
    },
    {
      tag: "trabajo",
      url: {
        updateCraftDeconsolDate:
          "http://localhost:4000/local/updateCraftDeconsolDate",
      },
    },
    {
      tag: "lectura",
      url: {
        zsh: "https://kapeli.com/cheat_sheets/Oh-My-Zsh_Git.docset/Contents/Resources/Documents/index",
      },
    },

    {
      tag: "development",
      url: {
        "seed db": "http://localhost:4000/local/seedDB",
      },
    },
    {
      tag: "development",
      url: { "localhost 3000": "http://local.teu.ai:3000/panel" },
    },

    {
      tag: "trabajo",
      url: {
        "my pull request":
          "https://github.com/pulls?q=is%3Aopen+is%3Apr+archived%3Afalse+sort%3Acreated-asc+author%3Afreddymhs",
      },
    },
    {
      tag: "mochila",
      url: {
        "klog drive": "https://drive.google.com/drive/my-drive",
      },
    },
    {
      tag: "lectura",
      url: {
        "doc prisma":
          "https://www.prisma.io/docs/concepts/components/prisma-client",
      },
    },
    {
      tag: "trabajo",
      url: {
        "run casa ideas PO": "http://127.0.0.1:4000/local/casaideas",
      },
    },
    {
      tag: "development",
      url: {
        "excel test dev":
          "https://docs.google.com/spreadsheets/d/1QerXce-yyQC1blvu4bJYzb0vaJWnS6RGG3VEHCRLxhY/edit#gid=0",
      },
    },
    {
      tag: "lectura",
      url: { nexus: "https://nexusjs.org/" },
    },
    {
      tag: "trabajo",
      url: { "run migrate": "http://localhost:4000/local/migrate" },
    },
    {
      tag: "trabajo",
      url: {
        "QW cycle":
          "https://github.com/teu-ai/webapp/projects/22#card-77952294",
      },
    },
    {
      tag: "lectura",
      url: {
        "es6 arrays":
          "https://medium.com/@alvaro.saburido/set-theory-for-arrays-in-es6-eb2f20a61848",
      },
    },
    {
      tag: "trabajo",
      url: {
        syncShipmentDocuments:
          "http://localhost:4000/local/syncShipmentDocuments",
      },
    },
    {
      tag: "lectura",
      url: {
        "klog wiki": "https://github.com/teu-ai/webapp/wiki",
      },
    },
    {
      tag: "trabajo",
      url: { email: "https://mail.google.com/mail/u/0/#inbox" },
    },
  ];
  const pool2022 = [
    {
      tag: "soporte",
      url: {
        "oi api":
          "https://capi.ocean-insights.com/documentation/api_reference/v2/#tag/Containers/paths/~1shipments~1events~1recent~1/get",
      },
    },
    {
      tag: "mochila",
      url: {
        "notion scrum":
          "https://www.notion.so/2ba6bde6d9e7457a9ec1f9ae48b5e002?v=be861da29764459e8eb586c32d91a9f8",
      },
    },
    {
      tag: "lectura",
      url: {
        "sheet ramda": "https://geusebi.github.io/ramda-cheat-sheet/dist/",
      },
    },
    {
      tag: "soporte",
      url: {
        "agregar responsable cobro y pago":
          "https://github.com/teu-ai/webapp/wiki/Como-Agregar-Responsables-de-cobro-y-pago-a-Oficinas-Klog",
      },
    },
    {
      tag: "soporte",
      url: {
        "agregar conceptos":
          "https://github.com/teu-ai/webapp/wiki/Adding-new-Concepts",
      },
    },
    {
      tag: "lectura",
      url: {
        "guia prisma3": "https://github.com/teu-ai/webapp/wiki/Prisma-3",
      },
    },
    {
      tag: "lectura",
      url: {
        "propagacion eventos":
          "https://www.freecodecamp.org/espanol/news/propagacion-de-eventos-y-captura-de-eventos-en-javascript-y-react/",
      },
    },
    {
      tag: "lectura",
      url: {
        "array intersection":
          "https://medium.com/@alvaro.saburido/set-theory-for-arrays-in-es6-eb2f20a61848",
      },
    },

    {
      tag: "development",
      url: {
        "get shipments docs":
          "http://localhost:4000/local/syncShipmentDocuments",
      },
    },

    {
      tag: "soporte",
      url: {
        "seguimiento carga":
          "https://ct.shipmentlink.com/servlet/TDB1_CargoTracking.do",
      },
    },
    {
      tag: "development",
      url: {
        "login auth0": "https://auth0.com/docs/api/authentication#signup",
      },
    },
    {
      tag: "lectura",
      url: {
        "change pswrd auth0":
          "https://auth0.com/docs/api/authentication#change-password",
      },
    },
    {
      tag: "development",
      url: {
        "klog api":
          "https://app.swaggerhub.com/apis-docs/Klog.co/klog-co_api/1.0.1#/",
      },
    },
    {
      tag: "development",
      url: {
        "klog api":
          "https://app.swaggerhub.com/apis-docs/Klog.co/klog-co_api/1.0.1#/",
      },
    },
    {
      tag: "lectura",
      url: {
        reduce:
          "https://www.redbitdev.com/post/using-array-reduce-with-objects",
      },
    },
    {
      tag: "lectura",
      url: {
        "modal confirm bug":
          "https://stackoverflow.com/questions/68464375/modal-confirmation-in-a-for-loop-promise-react",
      },
    },
    {
      tag: "lectura",
      url: {
        "promises :x":
          "https://stackoverflow.com/questions/68795530/type-promiseany-have-no-call-signatures",
      },
    },
    {
      tag: "lectura",
      url: {
        "use modal antd, confirm":
          "https://ant.design/components/modal?ref=checklist.design",
      },
    },
    {
      tag: "development",
      url: {
        "exchange rates cl": "http://localhost:4000/local/seedDB",
      },
    },
    {
      tag: "trabajo",
      url: {
        "json generator": "https://json-generator.com/#",
      },
    },
    {
      tag: "development",
      url: {
        plataknust: "https://github.com/teu-ai/webapp/wiki/PlataKnust",
      },
    },

    {
      tag: "development",
      url: {
        "exchange rates mx": "http://localhost:4000/local/exchangeRates/mx",
      },
    },
    {
      tag: "lectura",
      url: {
        "formik touch&erros on field": "https://formik.org/docs/api/field",
      },
    },
    {
      tag: "lectura",
      url: {
        "cache in apollo client":
          "https://www.apollographql.com/docs/react/caching/overview/#data-normalization",
      },
    },
    {
      tag: "soporte",
      url: {
        "lat-long": "https://www.findlatitudeandlongitude.com/",
      },
    },
    {
      tag: "lectura",
      url: {
        "formik basic": "https://formik.org/docs/api/formik",
      },
    },
    {
      tag: "lectura",
      url: {
        "example validation formik":
          "https://codesandbox.io/s/rvn83?file=/src/Form.js:188-222",
      },
    },
    {
      tag: "lectura",
      url: {
        "multi steps in formik":
          "https://github.com/jaredpalmer/formik/blob/master/examples/MultistepWizard.js",
      },
    },
  ];
  const pool2023 = [
    {
      tag: "mochila",
      url: {
        "react-in-line css": "https://staxmanade.com/CssToReact/",
      },
    },
    {
      tag: "trabajo",
      url: {
        "psql array functions":
          "https://www.postgresql.org/docs/9.1/functions-array.html",
      },
    },
    {
      tag: "mochila",
      url: {
        "klog local shipments": "http://local.teu.ai:3000/shipments",
      },
    },
    {
      tag: "development",
      url: {
        "copy file branch git":
          "https://www.freecodecamp.org/news/git-checkout-file-from-another-branch/",
      },
    },

    {
      tag: "trabajo",
      url: {
        "aws prod":
          "https://us-east-1.console.aws.amazon.com/lambda/home?region=us-east-1#/functions/teuai-main-service-prod-graphqlTest?tab=monitoring",
      },
    },
    {
      tag: "trabajo",
      url: {
        "mail hog": "http://local.teu.ai:7025/",
      },
    },
    {
      tag: "development",
      url: {
        "historias dev": "https://github.com/orgs/teu-ai/projects/11/views/2",
      },
    },
    {
      tag: "mochila",
      url: {
        "klog design":
          "https://www.chromatic.com/builds?appId=6464fad3498c3d83d9930171",
      },
    },

    {
      tag: "mochila",
      url: {
        "staging email testing":
          "https://groups.google.com/u/0/a/klog.co/g/testing",
      },
    },

    {
      tag: "trabajo",
      url: {
        opportunities:
          "https://www.notion.so/klog-tech/Opportunities-a70b188b1a3d4048a7a7dd72e0b02293",
      },
    },

    {
      tag: "trabajo",
      url: {
        "klog deployer": "https://deployer.klog.co/",
      },
    },

    {
      tag: "development",
      url: {
        migrate: "http://localhost:4000/local/migrate",
      },
    },
  ];

  //
  const [initialPool, _] = useState([...pool2021, ...pool2022, ...pool2023]);
  const [newPool, setNewPool] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
            // style={{
            //   // width: "1280px",
            //   height: "100%",
            //   color: "#323333",
            // }}
            >
              <ParentStyle
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <div style={{ display: "flex" }}>
                  <Table
                    initialPool={initialPool}
                    setNewPool={setNewPool}
                    newPool={newPool}
                  />
                </div>
              </ParentStyle>
            </div>
          </div>
        </div>
      </header>
      <br />

      <div>
        <InputAddItem setNewPool={setNewPool} initialPool={initialPool} />
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
const ParentStyle = ({ children }) => {
  return <div>{children}</div>;
};

render(<App />, document.getElementById("root"));

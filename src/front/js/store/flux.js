const getState = ({ getStore, getActions, setStore }) => {
  return {

    store: {
      logged: null
    },

    actions: {
      verify: async () => {
        try {
          const response = await fetch("https://3001-4geeksacade-reactflaskh-qrqdo8dn5m3.ws-eu47.gitpod.io/api/private", {
            method: "GET",
            headers: {"Content-Type": "application-json", "Authorization": "Bearer " + localStorage.getItem("token")}
          });
          const data = await response.json();
          setStore({logged: data.logged_in || false});
        }
        catch (e){
          setStore({logged: false})
        }
        },
        logout: async () => {
          localStorage.clear();
          setStore({logged: false})
        }
      }
    };
  };

export default getState;

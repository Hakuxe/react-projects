import axios from "axios";

function findAllUfs(){
    return axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
}

export default findAllUfs;
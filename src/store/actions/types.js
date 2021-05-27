// @flow
export type Type =
    'SERVIDOR_UPDATE_JOGADOR' |
    'SERVIDOR_UPDATE_SALA' |
    'JOGADOR_SET_IDENTIFICADOR' |
    'JOGADOR_SET_NOME' |
    'JOGADOR_TOGGLE_INICIAR' |
    'JOGADOR_SET_POSICAO' |
    'JOGADOR_SET_ICONE' |
    'SALA_FLUSH' |
    'SALA_SET_SITUACAO' |
    'SALA_SET_CODIGO' |
    'SALA_ADD_JOGADOR';
export type Action = {
    type: Type,
    payload: any,
};

/**
 * General Actions
 */
export const SERVIDOR_UPDATE_JOGADOR = 'SERVIDOR_UPDATE_JOGADOR';
export const SERVIDOR_UPDATE_SALA = 'SERVIDOR_UPDATE_SALA';

/**
 * Jogador Actions 
 */
export const JOGADOR_SET_IDENTIFICADOR = 'JOGADOR_SET_IDENTIFICADOR';
export const JOGADOR_SET_NOME = 'JOGADOR_SET_NOME';
export const JOGADOR_TOGGLE_INICIAR = 'JOGADOR_TOGGLE_INICIAR';
export const JOGADOR_SET_POSICAO = 'JOGADOR_SET_POSICAO';
export const JOGADOR_SET_ICONE = 'JOGADOR_SET_ICONE';

/**
 * Sala Actions 
 */
export const SALA_FLUSH = 'SALA_FLUSH';
export const SALA_SET_SITUACAO = 'SALA_SET_SITUACAO';
export const SALA_SET_CODIGO = 'SALA_SET_CODIGO';
export const SALA_ADD_JOGADOR = 'SALA_ADD_JOGADOR';

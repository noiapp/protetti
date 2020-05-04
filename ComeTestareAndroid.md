# Procedura test app Protetti Android v. 0.4.0

## Indicare i device utilizzati per il test  
Nella descrizione dei test puoi fare riferimento al numero del device (es: #1)  

| Numero Device     | Modello       |  Versione SO      | Versione App (se usata diversa dalla 0.4.0)       |  
| :---------------- | :------------ | :---------------- | :----------------------------------------------   |  
| #1                |               |                   |                                                   |  
| #2                |               |                   |                                                   |  
| #3                |               |                   |                                                   |  

## Procedura:
1. Scaricare l'app dall'indirizzo https://github.com/noiapp/noi-app-android/releases/tag/0.4.0  
2. Installare l'app seguendo la procedura abilitando i permessi richiesti su almeno due device  
3. Iniziare il test. Puoi fare un test libero o seguire una delle indicazioni nel paragrafo '**Tipi di test effettuabili**'  
4. Indicare il risultato del test sulle [Issue](https://github.com/noiapp/noi-app-android/issues) del repository GitHub


## Tipi di test effettuabili:
- Ricezione handshake
- Ricezione segnalazione dell'incontro con il contagiato
- Misurazione distanza massima handshake
- Corretto reset dell'SDK

### Test di Ricezione handshake
1. Abilitare bluetooth e tracciazione sui device
2. Quando entrambi i device sono pronti deve comparire un popup (o toast) "handshake attuali: x" ogni qualvolta viene effettuato un handshake
3. Visualizzazione dalle statistiche di Debug
    + Dalla schermata principale premere il bottone "DEBUG" per visualizzare le statistiche di debug
    + Verificare che la voce "Numero di Handshake" si incrementi
    + Verificare che la voce "Ultima sincronizzazione" non riporti "n/a"

Per rieseguire il test, Resettare l'SDK (vedi procedura: Corretto reset SDK)

### Test di Ricezione segnalazione dell'incontro con il contagiato
1. Lasciare attivare i device per farli entrare in contatto (vedi il punto precedente: Ricezione handshake)
2. Attivare il Wi-fi
3. Dalla schermata principale del dispositivo INFORMANTE premere il bottone "INFORMA DELLA MALATTIA"
4. Inserire un numero qualsiasi di 6 cifre e premere il bottone "INVIA"
5. Ora nella schermata principale si visualizza il messaggio "INFEZIONE SEGNALATA"
6. Visualizzazione dalle statistiche di Debug
    + Dalla schermata principale premere il bottone "DEBUG" per visualizzare le statistiche di debug
    + Verificare che la voce "Certificato positivo" sia "sì"
    + Verificare che la voce "Ultima sincronizzazione" non riporti "n/a"
7. Sull'altro dispositivo RICEVENTE abilitare il Wi-fi, se non è già abilitato
8. Attendere la notifica dell'Incontro Positivo - Notifica "Nuova informazione disponibile"
9. Visualizzazione dalle statistiche di Debug
    + Dalla schermata principale premere il bottone "DEBUG" per visualizzare le statistiche di debug
    + Verificare che la voce "Incontro positivo" sia "sì"
    + Verificare che la voce "Ultima sincronizzazione" non riporti "n/a"

Per rieseguire il test, Resettare l'SDK (vedi procedura: Corretto reset SDK)

#### Varianti del test:
- Dopo un reset, invertire il dispositivo INFORMANTE e RICEVENTE
- Più dispositivi INFORMANTI e RICEVENTI nello stesso momento
- Installare un terzo dispositivo dopo la procedura INFORMANTE e RICEVENTE, per verificare che l'INFORMANTE continui a segnalare la sua "infettività"

### Test di Misurazione distanza massima handshake
1. Abilitare bluetooth e tracciazione sui device
2. Quando i device sono pronti deve comparire un popup (o toast) "handshake attuali: x" ogni qualvolta viene effettuato un handshake
3. Spostarsi allontanandosi da uno dei due device
4. Quando non si visualizza più il popup quella dovrebbe essere la distanza massima

#### Varianti del test:
- Verificare la ricezione dietro ad un ostacolo (muro, persone, ecc)
- Verificare il funzionamento con più di due dispositivi a diverse distanze
- Verificare il funzionamento con più di due dispositivi, dove alcuni dispositivi si frappongono come "ostacoli"


### Test di Corretto reset dell'SDK
1. Connettere due dispositivi ed attendere che si scambino delle informazioni (vedi il punto: Ricezione handshake)
2. Visualizzazione dalle statistiche di Debug
    + Dalla schermata principale premere il bottone "DEBUG" per visualizzare le statistiche di debug
    + Premere il bottone "RIPRISTINA SDK"
3. Verificare che le statistiche di Debug si azzerino e operino correttamente
    + Verificare che la voce "Ultima sincronizzazione" non riporti "n/a"
    + Verificare che la voce "Certificato positivo" sia "no"
    + Verificare che la voce "Incontro positivo" sia "no"
    + Verificare che la voce "Numero di Handshake" sia 0






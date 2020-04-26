# Noi App

Lo scopo del progetto è creare un app mobile di tracciamento dei contatti basata sullo standard [DP-3T](https://github.com/DP-3T), specificamente per la popolazione Italiana

Lo standard è disegnato per rispettare la privacy per non condividere informazioni, se non dati anonimizzati per divulgazione volontaria di persone che hanno scoperto di essere infette. Questi dati possono essere controllati dall'app per verificare se sei stato in contatto con qualche persona infetta.

Questo standard, inoltre, sembra essere compatibile con le API in arrivo da Apple/Google per il tracciamento dei contatti.

L'applicazione, nella sua attuale realizzazion, sarà un applicazione React Native, con incluso un modulo DP-3T SDK, con un backend in Java basato su Spring. Lo stack tecnologico è soggetto a cambiamenti durante la sua evoluzione.

## Premesse

Declinazione di responsabilità: se ritente che ci siano informazioni errate, per favore apriteci una segnalazione per permetterci di correggere le informazioni errate.

Si suppone che venga sviluppata un app "ufficiale" italiana, ma il suo stato è ingnoto. Quello che si sa è che:
- Una Società privata italiana è stata selezionata per sviluppare l'applicazione.
- Abbiamo richiesto esplicitamente chiarimenti sul rilascio del codice sorgente, ma non c' è stata data (ancora) nessuna risposta 
- Ci è stato detto informalmente che i sorgenti del codice saranno rilasciati, ma non in modo ufficiale.
- Anche se il codice sarà rilasciato, bisgna vedere quanto cio che sarà  rilasciato sarà  completo e adeguatamente documentato da poter consentire di essere revisionato dalla comunità.
- La Società è membro dell'organizzazione [PEPP-PT](https://github.com/pepp-pt/pepp-pt-documentation) , ed è stato divulgato che l'app userà o standard PPPT-DT.
- l'organizzazione PPPT-DT è fondamentalmente di tipo ad invito. Non si sa nulla di come funzioni internamente. Al momento nessun sorgente pubblico è stato rilasciato, sebbene sia dichiarato che il codice rispetti la lincenza Mozilla.
- Inoltre lo standard PPPT-DP prevede il controllo centralizzato delle informazioni dei contatti.
- Negli ultimi giorni la relationship tra [PEPP-DP e DP-3T](https://twitter.com/mikarv/status/1250850682904760320?s=20) non è andata benissimo ed ogni riferimento al DP-3T è stato rimosso dal PEPP-DP.

## Motivazioni fondamentali

Date queste premesse, qualunque sarà il risultato dello sviluppo dell'app "ufficiale", riteniamo che sia fondamentale avere un app alternativa con i seguenti obbiettivi:

- Sviluppata da zero come progetto opensource 
- Orientata alla comunità, senza alcuna relazione con organizazioni private
- Basata sullo standard "alternativo" D3PT (decentralizzato) in luogo del PEPP-DP (centralizzato).
- In grado di integrarsi con le imminenti API di Apple e Google.

Attualmente stiamo lavorando all'app DP3T in modo che sia localizzata e disponibile per l'italia, e a fornire l'infrastruttura server.


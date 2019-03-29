# CF APP

Applicazione Android che scansiona il codice a barre presente sulla tessera sanitaria sviluppata per il
colloquio orale dell'esame di Stato sostenuto al termine del percorso di studi in Informatica presso l'[ITIS
G. Marconi](https://www.marconiverona.gov.it/portal/) di Verona (2012-2017).

*Nota*: la prima versione di questa applicazione comunicava tramite chiamata AJAX con un server Flask
(framework Web leggero scritto in Python) ospitato sulla piattaforma OpenShift; questa versione invece
prevede sempre l'utilizzo di AJAX ma si serve dei dati contenuti in un file XML locale.

## Istruzioni

Seguire queste istruzioni per ottenere una copia del progetto.

### Prerequisiti

Prima di iniziare si ricorda che è necessario aver installato il seguente software:
* [*Android Studio*](https://developer.android.com/studio)
* [*Node.js*](https://nodejs.org)

### Preparazione dell'applicazione

Se *Android Studio* e *Node.js* sono stati correttamente installati, si dovrebbe essere in grado di
richiamare il comando `npm`, che verrà usato per installare il modulo `cordova`:
```
npm install -g cordova
```

Per creare il progetto APP bisogna posizionarsi nella directory desiderata ed eseguire il seguente comando:
```
cordova create APP
```

Poi bisogna spostarsi all’interno della directory del progetto appena creato ed aggiungere la
piattaforma Android installando il relativo SDK:
```
cordova platform add android
```

Infine bisogna aggiungere il plugin BarcodeScanner:
```
cordova plugin add phonegap-plugin-barcodescanner
```

### Modificare il progetto

Per aprire il progetto, avviare *Android Studio* e selezionare 'Open an existing Android Studio project'.
A questo punto è necessario navigare fino alla directory dove è stato creato il progetto APP e poi
aprire la seguente directory:
```
...\APP\platforms\android\
```

A questo punto è necessario sostituire i seguenti file con quelli presenti in questo repository:
- `...\APP\platforms\android\app\src\main\assets\www\index.html`
- `...\APP\platforms\android\app\src\main\assets\www\css\index.css`
- `...\APP\platforms\android\app\src\main\assets\www\js\index.js`
- `...\APP\platforms\android\app\src\main\res\values\strings.xml`

Infine bisogna aggiungere il file `catasto.xml` nella seguente directory:
```
...\APP\platforms\android\app\src\main\assets\www\
```

### Esecuzione
Per provare l'applicazione sul proprio dispositivo basta collegarlo tramite USB al computer, premere il tasto
Run in alto, selezionare il dispositivo (il quale deve avere il Debug USB abilitato) e premere OK.

## Conoscenze utilizzate

* Framework [Apache Cordova](https://cordova.apache.org/)
* Plugin [BarcodeScanner](https://github.com/phonegap/phonegap-plugin-barcodescanner)
* XML [AJAX](https://www.w3schools.com/xml/ajax_intro.asp)

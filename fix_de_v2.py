import re

path = "de/index.html"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Sostituisce l'intero blocco H2 (tutti gli attributi data-* + testo visibile)
h2_pattern = re.compile(
    r'<h2 data-it="Noleggio scooter e auto a La Spezia vicino porto e stazione".*?</h2>',
    re.DOTALL
)
h2_new = '''<h2 data-it="Noleggio Vespa, scooter e auto in via Michele Rossi, 67 a La Spezia"
      data-en="Vespa, Scooter and Car Rental at Via Michele Rossi, 67 in La Spezia"
      data-fr="Location Vespa, scooter et voiture Via Michele Rossi, 67 à La Spezia"
      data-es="Alquiler de Vespa, scooter y coche en Via Michele Rossi, 67 en La Spezia"
      data-de="Vespa, Roller und Auto mieten in der Via Michele Rossi, 67 in La Spezia">Vespa, Roller und Auto mieten in der Via Michele Rossi, 67 in La Spezia</h2>'''
content, n1 = h2_pattern.subn(h2_new, content)

# 2. Sostituisce l'intero blocco paragrafo "Strategische Lage" (tutti gli attributi data-* + testo visibile)
p_pattern = re.compile(
    r'<p data-it="I nostri punti di noleggio sono strategicamente posizionati.*?</p>',
    re.DOTALL
)
p_new = '''<p data-it="La nostra sede è situata a 1 km dalla stazione ferroviaria di <strong>La Spezia Migliarina</strong> e a 2,5 km dal terminal crociere. Offriamo inoltre, a pagamento, il servizio di consegna e ritiro dei nostri veicoli dove volete in un raggio di 20 km dalla nostra sede di via Michele Rossi, 67, quindi possiamo portare direttamente il veicolo al tuo hotel, B&B, alla stazione ferroviaria o al terminal crociere se arrivi con una nave da crociera."
        data-en="Our office is located 1 km from <strong>La Spezia Migliarina</strong> railway station and 2.5 km from the cruise terminal. We also offer, for a fee, a vehicle delivery and pickup service wherever you need within a 20 km radius from our office at Via Michele Rossi, 67. We can bring the vehicle directly to your hotel, B&B, railway station or cruise terminal if you arrive by cruise ship."
        data-fr="Notre bureau est situé à 1 km de la gare ferroviaire de <strong>La Spezia Migliarina</strong> et à 2,5 km du terminal de croisière. Nous proposons également, contre paiement, un service de livraison et de collecte de nos véhicules où vous le souhaitez dans un rayon de 20 km depuis notre bureau de Via Michele Rossi, 67. Nous pouvons apporter le véhicule directement à votre hôtel, B&B, à la gare ferroviaire ou au terminal de croisière si vous arrivez en croisière."
        data-es="Nuestra oficina está situada a 1 km de la estación de tren de <strong>La Spezia Migliarina</strong> y a 2,5 km de la terminal de cruceros. También ofrecemos, previo pago, un servicio de entrega y recogida de nuestros vehículos donde desee en un radio de 20 km desde nuestra oficina en Via Michele Rossi, 67. Podemos llevar el vehículo directamente a su hotel, B&B, a la estación de tren o a la terminal de cruceros si llega en crucero."
        data-de="Unser Büro befindet sich 1 km vom Bahnhof <strong>La Spezia Migliarina</strong> und 2,5 km vom Kreuzfahrtterminal entfernt. Wir bieten außerdem gegen Gebühr einen Liefer- und Abholservice für unsere Fahrzeuge an, wohin Sie möchten, im Umkreis von 20 km von unserem Büro in der Via Michele Rossi, 67. Wir können das Fahrzeug direkt zu Ihrem Hotel, B&B, zum Bahnhof oder zum Kreuzfahrtterminal bringen, wenn Sie mit einem Kreuzfahrtschiff anreisen.">
        Unser Büro befindet sich 1 km vom Bahnhof <strong>La Spezia Migliarina</strong> und 2,5 km vom
        Kreuzfahrtterminal entfernt. Wir bieten außerdem gegen Gebühr einen Liefer- und Abholservice für unsere Fahrzeuge
        an, wohin Sie möchten, im Umkreis von 20 km von unserem Büro in der Via Michele Rossi, 67. Wir können das Fahrzeug
        direkt zu Ihrem Hotel, B&B, zum Bahnhof oder zum Kreuzfahrtterminal bringen, wenn Sie mit einem Kreuzfahrtschiff
        anreisen.
      </p>'''
content, n2 = p_pattern.subn(p_new, content)

# 3. Sostituisce TUTTI gli attributi data-* dei pulsanti Google Maps (2 occorrenze)
btn_pattern = re.compile(
    r'data-it="📍 Avvia navigazione" data-en="📍 Start navigation" data-fr="📍 Démarrer la navigation" data-es="📍 Iniciar navegación" data-de="📍 Navigation starten">📍 Navigation starten'
)
btn_new = 'data-it="📍 Trovaci su Google Maps" data-en="📍 Find us on Google Maps" data-fr="📍 Nous trouver sur Google Maps" data-es="📍 Encuéntranos en Google Maps" data-de="📍 Finde uns auf Google Maps">📍 Finde uns auf Google Maps'
content, n3 = btn_pattern.subn(btn_new, content)

print(f"H2 sostituiti: {n1} (atteso: 1)")
print(f"Paragrafo sostituiti: {n2} (atteso: 1)")
print(f"Pulsanti sostituiti: {n3} (atteso: 2)")

if n1 == 1 and n2 == 1 and n3 == 2:
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print("OK: File salvato correttamente.")
else:
    print("ATTENZIONE: uno o più pattern non hanno trovato corrispondenza esatta.")
    print("Il file NON è stato modificato. Controlla il testo attuale prima di riprovare.")

$files = Get-ChildItem -Filter *.html
foreach ($file in $files) {
    if ($file.Name -eq "index.html") { continue } # index.html is just a redirect
    $content = Get-Content $file.FullName -Raw

    # --- 1. General replacements for all languages ---
    
    # Meta Description & Titles
    $content = $content -replace "Noleggio scooter 125, auto e van 9 posti", "Noleggio scooter 125 e auto"
    $content = $content -replace "Scooter 125, car and 9-seater van", "Scooter 125 and car"
    $content = $content -replace "Location de scooter 125, voiture et van 9 places", "Location de scooter 125 et voiture"
    $content = $content -replace "Alquiler de scooter 125, coche y furgoneta de 9 plazas", "Alquiler de scooter 125 y coche"
    $content = $content -replace "Roller 125, Auto und 9-Sitzer Van", "Roller 125 und Auto"
    
    # Header & Card Titles
    $content = $content -replace "🚗 Auto & 🚐 Van", "🚗 Auto"
    $content = $content -replace "🚗 Cars & 🚐 Vans", "🚗 Cars"
    $content = $content -replace "🚗 Voitures et 🚐 Vans", "🚗 Voitures"
    $content = $content -replace "🚗 Coches y 🚐 Furgonetas", "🚗 Coches"
    $content = $content -replace "🚗 Auto & 🚐 Van", "🚗 Auto" # German uses Auto & Van too
    
    # Phrases in data-attributes (the most important part)
    # IT
    $content = $content -replace "Utilitarie e van 9 posti per famiglie e gruppi", "Utilitarie per famiglie e gruppi"
    $content = $content -replace "auto utilitarie e van 9 posti", "auto utilitarie"
    $content = $content -replace "auto utilitarie e van 9 posti", "auto utilitarie"
    $content = $content -replace "Noleggio Auto e Van 9 Posti", "Noleggio Auto"
    
    # EN
    $content = $content -replace "City cars and 9-seater vans, ideal for families and groups", "City cars, ideal for families and groups"
    $content = $content -replace "city cars and 9-seater vans", "city cars"
    $content = $content -replace "Car and 9-Seater Van Rental", "Car Rental"
    
    # FR
    $content = $content -replace "Citadines et vans 9 places pour famiglie et groupes", "Citadines pour familles et groupes"
    $content = $content -replace "citadines et des vans 9 places", "citadines"
    $content = $content -replace "Location de Voitures et Vans 9 Places", "Location de Voitures"
    
    # ES
    $content = $content -replace "Coches económicos y furgonetas de 9 plazas para familias y grupos", "Coches económicos para familias y grupos"
    $content = $content -replace "coches económicos y furgonetas de 9 plazas", "coches económicos"
    $content = $content -replace "Alquiler de Coches y Furgonetas de 9 Plazas", "Alquiler de Coches"
    
    # DE
    $content = $content -replace "Kleinwagen und 9-Sitzer Vans für Familien und Gruppen", "Kleinwagen für Familien und Gruppen"
    $content = $content -replace "Kleinwagen und 9-Sitzer-Vans", "Kleinwagen"
    $content = $content -replace "Auto- und 9-Sitzer-Van-Vermietung", "Auto-Vermietung"

    # --- 2. Specific fixes for noleggio-auto-la-spezia*.html ---
    if ($file.Name -like "noleggio-auto-la-spezia*") {
        # Remove Van row from table
        $content = [regex]::Replace($content, '(?s)<tr>\s*<td><strong>Van 9 Posti</strong>.*?</tr>', "")
        $content = [regex]::Replace($content, '(?s)<tr>\s*<td><strong>9-Seater Van</strong>.*?</tr>', "")
        $content = [regex]::Replace($content, '(?s)<tr>\s*<td><strong>Van 9 places</strong>.*?</tr>', "")
        $content = [regex]::Replace($content, '(?s)<tr>\s*<td><strong>Furgoneta de 9 plazas</strong>.*?</tr>', "")
        $content = [regex]::Replace($content, '(?s)<tr>\s*<td><strong>9-Sitzer Van</strong>.*?</tr>', "")
        
        # Remove Van card from grid
        $content = [regex]::Replace($content, '(?s)<div class="card">\s*<h3>🚐 Van 9 Posti</h3>.*?</div>', "")
        $content = [regex]::Replace($content, '(?s)<div class="card">\s*<h3>🚐 9-Seater Vans</h3>.*?</div>', "")
        $content = [regex]::Replace($content, '(?s)<div class="card">\s*<h3>🚐 Vans 9 places</h3>.*?</div>', "")
        $content = [regex]::Replace($content, '(?s)<div class="card">\s*<h3>🚐 Furgonetas de 9 plazas</h3>.*?</div>', "")
        $content = [regex]::Replace($content, '(?s)<div class="card">\s*<h3>🚐 9-Sitzer-Vans</h3>.*?</div>', "")
        
        # Header title fixes
        $content = $content -replace "Noleggio Auto e Van 9 Posti a La Spezia", "Noleggio Auto a La Spezia"
        $content = $content -replace "Car and 9-Seater Van Rental in La Spezia", "Car Rental in La Spezia"
        $content = $content -replace "Location de Voitures et Vans 9 Places à La Spezia", "Location de Voitures à La Spezia"
        $content = $content -replace "Alquiler de Coches y Furgonetas de 9 Plazas en La Spezia", "Alquiler de Coches en La Spezia"
        $content = $content -replace "Auto- und 9-Sitzer-Van-Vermietung in La Spezia", "Auto-Vermietung in La Spezia"
        
        # Intro text fixes
        $content = $content -replace "auto utilitarie economiche e van 9 posti spaziosi", "auto utilitarie economiche"
        $content = $content -replace "affordable city cars and spacious 9-seater vans", "affordable city cars"
        $content = $content -replace "citadines abordables et des vans 9 places spacieux", "citadines abordables"
        $content = $content -replace "coches económicos y furgonetas de 9 plazas espaciosas", "coches económicos"
        $content = $content -replace "preisgünstige Kleinwagen und geräumige 9-Sitzer-Vans", "preisgünstige Kleinwagen"
    }

    # --- 3. JSON-LD fixes ---
    # In index files, the VehicleRentalAgency might have van mentions in meta or something, but usually it's just text.
    # We already replaced most of it above.

    Set-Content $file.FullName $content
}

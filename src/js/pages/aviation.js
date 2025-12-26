// Aviation-Specific JavaScript
        
        // Cloud Base Calculator
        function calculateCloudBase() {
            const temperature = parseFloat(document.getElementById("temperature").value);
            const dewPoint = parseFloat(document.getElementById("dew-point").value);
            const res = document.getElementById("result");

            if (isNaN(temperature) || isNaN(dewPoint)) {
                res.style.display = 'block';
                res.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Please enter valid numbers.';
                return;
            }

            if (temperature < dewPoint) {
                res.style.display = 'block';
                res.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Temperature cannot be less than dew point.';
                return;
            }

            const cloudBase = ((temperature - dewPoint) / 2.5) * 1000;
            res.style.display = 'block';
            res.innerHTML = `<i class="fas fa-cloud"></i> <strong>Cloud Base:</strong> ${cloudBase.toFixed(0)} ft AGL`;
        }

        // Pressure Altitude Calculator
        function calculatePressureAltitude() {
            const altimeterSetting = parseFloat(document.getElementById("altimeter-setting").value);
            const currentAltitude = parseFloat(document.getElementById("current-altitude").value);
            const res = document.getElementById("pressure-result");

            if (isNaN(altimeterSetting) || isNaN(currentAltitude)) {
                res.style.display = 'block';
                res.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Please enter valid numbers.';
                return;
            }

            const standardAltimeter = 29.92;
            const pressureDifference = standardAltimeter - altimeterSetting;
            const pressureAltitude = (pressureDifference * 1000) + currentAltitude;
            
            res.style.display = 'block';
            res.innerHTML = `<i class="fas fa-tachometer-alt"></i> <strong>Pressure Altitude:</strong> ${pressureAltitude.toFixed(0)} ft`;
        }

        // Crosswind Calculator
        function calculateCrosswind() {
            const runwayHeading = parseFloat(document.getElementById("runway-heading").value);
            const windDirection = parseFloat(document.getElementById("wind-direction").value);
            const windSpeed = parseFloat(document.getElementById("wind-speed").value);
            const res = document.getElementById("crosswind-result");

            if (isNaN(runwayHeading) || isNaN(windDirection) || isNaN(windSpeed)) {
                res.style.display = 'block';
                res.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Please enter valid numbers.';
                return;
            }

            // Calculate wind angle relative to runway
            let windAngle = windDirection - runwayHeading;
            if (windAngle > 180) windAngle -= 360;
            if (windAngle < -180) windAngle += 360;

            // Convert to radians
            const angleRad = (windAngle * Math.PI) / 180;

            // Calculate components
            const headwind = windSpeed * Math.cos(angleRad);
            const crosswind = windSpeed * Math.sin(angleRad);

            res.style.display = 'block';
            const headwindText = headwind > 0 ? `Headwind: ${headwind.toFixed(1)} kt` : `Tailwind: ${Math.abs(headwind).toFixed(1)} kt`;
            res.innerHTML = `<i class="fas fa-wind"></i> <strong>${headwindText}</strong><br><strong>Crosswind:</strong> ${Math.abs(crosswind).toFixed(1)} kt`;
        }

        // Density Altitude Calculator
        function calculateDensityAltitude() {
            const fieldElevation = parseFloat(document.getElementById("field-elevation").value);
            const oat = parseFloat(document.getElementById("oat").value);
            const res = document.getElementById("density-result");

            if (isNaN(fieldElevation) || isNaN(oat)) {
                res.style.display = 'block';
                res.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Please enter valid numbers.';
                return;
            }

            // ISA temp at sea level is 15°C, decreases 2°C per 1000 ft
            const isaTemp = 15 - (fieldElevation / 1000) * 2;
            const tempDeviation = oat - isaTemp;

            // Density altitude approximation: 120 ft per °C deviation per 1000 ft elevation
            const densityAltitude = fieldElevation + (tempDeviation * 120);

            res.style.display = 'block';
            res.innerHTML = `<i class="fas fa-mountain"></i> <strong>Density Altitude:</strong> ${densityAltitude.toFixed(0)} ft<br><small>Aircraft performs as if at this altitude</small>`;
        }

        // TAS Calculator
        function calculateTAS() {
            const ias = parseFloat(document.getElementById("ias").value);
            const altitude = parseFloat(document.getElementById("altitude-tas").value);
            const oat = parseFloat(document.getElementById("oat-tas").value);
            const res = document.getElementById("tas-result");

            if (isNaN(ias) || isNaN(altitude) || isNaN(oat)) {
                res.style.display = 'block';
                res.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Please enter valid numbers.';
                return;
            }

            // TAS = IAS × √(T₀/T) where T₀ = 288.15K (15°C), T = OAT in Kelvin
            const t0 = 288.15;
            const t = oat + 273.15;
            const tas = ias * Math.sqrt(t0 / t);

            res.style.display = 'block';
            res.innerHTML = `<i class="fas fa-speedometer-alt"></i> <strong>True Airspeed:</strong> ${tas.toFixed(1)} knots`;
        }

        // Fuel Calculator
        function calculateFuel() {
            const burnRate = parseFloat(document.getElementById("fuel-burn-rate").value);
            const flightTime = parseFloat(document.getElementById("flight-time").value);
            const reservePercent = parseFloat(document.getElementById("reserve-percent").value);
            const res = document.getElementById("fuel-result");

            if (isNaN(burnRate) || isNaN(flightTime) || isNaN(reservePercent)) {
                res.style.display = 'block';
                res.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Please enter valid numbers.';
                return;
            }

            const fuelUsed = burnRate * flightTime;
            const reserveFuel = (reservePercent / 100) * fuelUsed;
            const totalFuel = fuelUsed + reserveFuel;

            res.style.display = 'block';
            res.innerHTML = `<i class="fas fa-gas-pump"></i> <strong>Fuel Used:</strong> ${fuelUsed.toFixed(1)} gal<br><strong>Reserve (${reservePercent}%):</strong> ${reserveFuel.toFixed(1)} gal<br><strong>Total Required:</strong> ${totalFuel.toFixed(1)} gal`;
        }

        // Time/Distance/Groundspeed Calculator
        function calculateTimeDistance() {
            const distance = parseFloat(document.getElementById("distance-nm").value);
            const groundspeed = parseFloat(document.getElementById("groundspeed").value);
            const res = document.getElementById("time-distance-result");

            if (isNaN(distance) || isNaN(groundspeed)) {
                res.style.display = 'block';
                res.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Please enter valid numbers.';
                return;
            }

            if (groundspeed === 0) {
                res.style.display = 'block';
                res.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Groundspeed cannot be zero.';
                return;
            }

            const timeHours = distance / groundspeed;
            const minutes = (timeHours % 1) * 60;
            const hours = Math.floor(timeHours);

            res.style.display = 'block';
            res.innerHTML = `<i class="fas fa-route"></i> <strong>Flight Time:</strong> ${hours}h ${minutes.toFixed(0)}m<br><strong>Distance:</strong> ${distance.toFixed(1)} NM @ ${groundspeed.toFixed(1)} kt`;
        }

        // Weight & Balance Calculator
        function calculateWeightAndBalance() {
            const emptyWeight = parseFloat(document.getElementById("empty-weight").value) || 0;
            const emptyArm = parseFloat(document.getElementById("empty-arm").value) || 0;
            const pilotWeight = parseFloat(document.getElementById("pilot-weight").value) || 0;
            const pilotArm = parseFloat(document.getElementById("pilot-arm").value) || 0;
            const passengerWeight = parseFloat(document.getElementById("passenger-weight").value) || 0;
            const passengerArm = parseFloat(document.getElementById("passenger-arm").value) || 0;
            const baggageWeight = parseFloat(document.getElementById("baggage-weight").value) || 0;
            const baggageArm = parseFloat(document.getElementById("baggage-arm").value) || 0;
            const fuelWeight = parseFloat(document.getElementById("fuel-weight").value) || 0;
            const fuelArm = parseFloat(document.getElementById("fuel-arm").value) || 0;
            const startupWeight = parseFloat(document.getElementById("startup-weight").value) || 0;
            const fuelBurn = parseFloat(document.getElementById("fuel-burn").value) || 0;

            // Calculate moments
            const emptyMoment = emptyWeight * emptyArm;
            const pilotMoment = pilotWeight * pilotArm;
            const passengerMoment = passengerWeight * passengerArm;
            const baggageMoment = baggageWeight * baggageArm;
            const fuelMoment = fuelWeight * fuelArm;

            // Ramp calculations
            const rampWeight = emptyWeight + pilotWeight + passengerWeight + baggageWeight + fuelWeight;
            const rampMoment = emptyMoment + pilotMoment + passengerMoment + baggageMoment + fuelMoment;
            const rampCG = rampWeight > 0 ? rampMoment / rampWeight : 0;

            // Takeoff calculations
            const startupMoment = startupWeight * fuelArm;
            const takeoffWeight = rampWeight - startupWeight;
            const takeoffMoment = rampMoment - startupMoment;
            const takeoffCG = takeoffWeight > 0 ? takeoffMoment / takeoffWeight : 0;

            // Landing calculations
            const burnedMoment = fuelBurn * fuelArm;
            const landingWeight = takeoffWeight - fuelBurn;
            const landingMoment = takeoffMoment - burnedMoment;
            const landingCG = landingWeight > 0 ? landingMoment / landingWeight : 0;

            // Update table
            document.getElementById("empty-moment").textContent = emptyMoment.toFixed(2);
            document.getElementById("pilot-moment").textContent = pilotMoment.toFixed(2);
            document.getElementById("passenger-moment").textContent = passengerMoment.toFixed(2);
            document.getElementById("baggage-moment").textContent = baggageMoment.toFixed(2);
            document.getElementById("fuel-moment").textContent = fuelMoment.toFixed(2);

            document.getElementById("ramp-weight").textContent = rampWeight.toFixed(2);
            document.getElementById("ramp-moment").textContent = rampMoment.toFixed(2);
            document.getElementById("ramp-cg").textContent = rampCG.toFixed(2);

            document.getElementById("startup-moment").textContent = startupMoment.toFixed(2);
            document.getElementById("takeoff-weight").textContent = takeoffWeight.toFixed(2);
            document.getElementById("takeoff-moment").textContent = takeoffMoment.toFixed(2);
            document.getElementById("takeoff-cg").textContent = takeoffCG.toFixed(2);

            document.getElementById("burned-moment").textContent = burnedMoment.toFixed(2);
            document.getElementById("landing-weight").textContent = landingWeight.toFixed(2);
            document.getElementById("landing-moment").textContent = landingMoment.toFixed(2);
            document.getElementById("landing-cg").textContent = landingCG.toFixed(2);
        }

        // Checklist Functions
        function toggleChecklistItem(element) {
            element.classList.toggle('checked');
            const isChecked = element.classList.contains('checked');
            element.setAttribute('aria-checked', isChecked);
            const icon = element.querySelector('.checklist-box i');
            icon.style.display = isChecked ? 'block' : 'none';
        }

        function resetChecklist() {
            document.querySelectorAll('.checklist-item').forEach(item => {
                item.classList.remove('checked');
                item.setAttribute('aria-checked', 'false');
                item.querySelector('.checklist-box i').style.display = 'none';
            });
        }

        // Keyboard support for checklist
        document.addEventListener('keydown', (e) => {
            if (e.target.classList.contains('checklist-item') && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault();
                toggleChecklistItem(e.target);
            }
        });

        // Mock Weather Data (Demo)
        window.addEventListener('load', () => {
            // Real METAR data is now loaded via metar-taf.com embed
            
            // Initialize checklist items with click handlers
            document.querySelectorAll('.checklist-item').forEach(item => {
                item.addEventListener('click', () => toggleChecklistItem(item));
            });
            
            // Initialize weight & balance calculator with input listeners
            const wbInputs = document.querySelectorAll('#weight-balance-table input');
            wbInputs.forEach(input => {
                input.addEventListener('change', calculateWeightAndBalance);
                input.addEventListener('input', calculateWeightAndBalance);
            });
        });
module.exports = (teamMembers, employeeIDs) => {
  const [Manager, Engineer1, Engineer2, Engineer3, Intern] = teamMembers;
  const manager = Manager;
  const engineer1 = Engineer1;
  const engineer2 = Engineer2;
  const engineer3 = Engineer3;
  const intern = Intern;

  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8" />
      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <script src="https://kit.fontawesome.com/0703f73264.js" crossorigin="anonymous"></script>
      <title>Team Builder</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous" />
      <link rel="stylesheet" href="./assets/css/style.css" type="text/css" />
  </head>
  
  <body>
      <header>
          <nav class="navbar sticky-top navbar-expand-lg" style="background-color: #36453bff;">
              <div class="container-fluid d-flex justify-content-center">
                  <h1><a href="/" class="navbar-brand text-light">My Team</a></h1>
              </div>
          </nav>
      </header>
      <main class="container text-center py-5">
          <section class="row row-cols-lg-5 g-2 g-lg-3 d-flex justify-content-center">
              <!-- JARED - Manager -->
              <div class="col-sm-6 col-lg-4">
                  <div class="card shadow mb-5 bg-body rounded">
                      <div class="card-header text-start text-light p-3">
                          <h4 class="card-title">${manager.firstName}</h4>
                          <div>
                              <h5 class="card-subtitle mb-2 text-light"><span class="fa-solid fa-mug-hot p-1"></span>
                                  Manager
                              </h5>
                          </div>
                      </div>
                      <div class="card-body px-4 py-5">
                          <div class="card text-start">
                              <ul class=" list-group list-group-flush">
                                  <li class="list-group-item"><strong>ID:</strong> ${manager.id}</li>
                                  <li class="list-group-item"><strong>Email:</strong> <a href="mailto:${manager.email}">${manager.email}</a></li>
                                  <li class="list-group-item"><strong>Office:</strong> ${manager.officeNumber}</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <!-- ALEC - Engineer -->
              <div class="col-sm-6 col-lg-4">
                  <div class="card shadow mb-5 bg-body rounded">
                      <div class="card-header text-start text-light p-3">
                          <h4 class="card-title">${engineer1.firstName}</h4>
                          <div>
                              <h5 class="card-subtitle mb-2 text-light"><span class="fa-solid fa-glasses"></span></span>
                                  Engineer
                              </h5>
                          </div>
                      </div>
                      <div class="card-body px-4 py-5">
                          <div class="card text-start">
                              <ul class=" list-group list-group-flush">
                                  <li class="list-group-item"><strong>ID:</strong> ${engineer1.id}</li>
                                  <li class="list-group-item"><strong>Email:</strong> <a href="mailto:${engineer1.email}">${engineer1.email}</a></li>
                                  <li class="list-group-item"><strong>GitHub:</strong> ${engineer1.github}</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <!-- GRACE - Engineer -->
              <div class="col-sm-6 col-lg-4">
                  <div class="card shadow mb-5 bg-body rounded">
                      <div class="card-header text-start text-light p-3">
                          <h4 class="card-title">${engineer2.firstName}</h4>
                          <div>
                              <h5 class="card-subtitle mb-2 text-light"><span class="fa-solid fa-glasses"></span></span>
                                  Engineer
                              </h5>
                          </div>
                      </div>
                      <div class="card-body px-4 py-5">
                          <div class="card text-start">
                              <ul class=" list-group list-group-flush">
                                  <li class="list-group-item"><strong>ID:</strong> ${engineer2.id}</li>
                                  <li class="list-group-item"><strong>Email:</strong> <a href="mailto:${engineer2.email}">${engineer2.email}</a></li>
                                  <li class="list-group-item"><strong>GitHub:</strong> ${engineer2.github}</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <!-- TAMMER - Engineer -->
              <div class="col-sm-6 col-lg-4">
                  <div class="card shadow mb-5 bg-body rounded">
                      <div class="card-header text-start text-light p-3">
                          <h4 class="card-title">${engineer3.firstName}</h4>
                          <div>
                              <h5 class="card-subtitle mb-2 text-light"><span class="fa-solid fa-glasses"></span></span>
                                  Engineer
                              </h5>
                          </div>
                      </div>
                      <div class="card-body px-4 py-5">
                          <div class="card text-start">
                              <ul class=" list-group list-group-flush">
                                  <li class="list-group-item"><strong>ID:</strong> ${engineer3.id}</li>
                                  <li class="list-group-item"><strong>Email:</strong> <a href="mailto:${engineer3.email}">${engineer3.email}</a></li>
                                  <li class="list-group-item"><strong>GitHub:</strong> ${engineer3.github}</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <!-- JOHN - Engineer -->
              <div class="col-sm-6 col-lg-4">
                  <div class="card shadow mb-5 bg-body rounded">
                      <div class="card-header text-start text-light p-3">
                          <h4 class="card-title">${intern.firstName}</h4>
                          <div>
                              <h5 class="card-subtitle mb-2 text-light"><span class="fa-solid fa-graduation-cap"></span>
                                  Intern
                              </h5>
                          </div>
                      </div>
                      <div class="card-body px-4 py-5">
                          <div class="card text-start">
                              <ul class=" list-group list-group-flush">
                                  <li class="list-group-item"><strong>ID:</strong> ${intern.id}</li>
                                  <li class="list-group-item"><strong>Email:</strong> <a href="mailto:${intern.email}">${intern.email}</a></li>
                                  <li class="list-group-item"><strong>School:</strong> ${intern.school}</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </main>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
          crossorigin="anonymous"></script>
  </body>
  
  </html>
    `;
};

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
      <link rel="stylesheet" href="./assets/css/style.css" type="text/css" />
      <title>Team Builder</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous" />
  </head>
  
  <body>
      <header>
          <nav class="navbar sticky-top navbar-expand-lg" style="background-color: #596869ff;">
              <div class="container-fluid">
                  <a href="/" class="navbar-brand text-light">My Team</a>
              </div>
          </nav>
      </header>
      <main class="container">
          <section class="d-grid gap-3">
              <div class="row">
                  <!-- Manager -->
                  <div class="col-sm-6 p-2 d-flex justify-content-center">
                      <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem">
                          <div class="card-body">
                              <h5 class="card-title">${manager.firstName}</h5>
                              <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                              <table class="table table-sm shadow-sm p-3 bg-body rounded border border-dark credentials">
                                  <tbody>
                                      <tr>
                                          <th scope="row">ID:</th>
                                          <td colspan="2">${manager.id}</td>
                                      </tr>
                                      <tr>
                                          <th scope="row">Email:</th>
                                          <td colspan="2"><a href="mailto:${manager.email}">${manager.email}</a></td>
                                      </tr>
                                      <tr>
                                          <th scope="row">Office:</th>
                                          <td colspan="2">${manager.officeNumber}</td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
                  <!-- ALEC - Engineer -->
                  <div class="col-sm-6 p-2 d-flex justify-content-center">
                      <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem">
                          <div class="card-body">
                              <h5 class="card-title">${engineer1.firstName}</h5>
                              <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
                              <table class="table table-sm shadow-sm p-3 bg-body rounded border border-dark credentials">
                                  <tbody>
                                      <tr>
                                          <th scope="row">ID:</th>
                                          <td colspan="2">${engineer1.id}</td>
                                      </tr>
                                      <tr>
                                          <th scope="row">Email:</th>
                                          <td colspan="2"><a href="mailto:${engineer1.email}">${engineer1.email}</a></td>
                                      </tr>
                                      <tr>
                                          <th scope="row">Github:</th>
                                          <td colspan="2">${engineer1.github}</td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
                  <!-- GRACE - Engineer -->
                  <div class="col-sm-4 p-2 d-flex justify-content-center">
                      <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem">
                          <div class="card-body">
                              <h5 class="card-title">Grace</h5>
                              <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
                              <table class="table table-sm shadow-sm p-3 bg-body rounded border border-dark credentials">
                                  <tbody>
                                      <tr>
                                          <th scope="row">ID:</th>
                                          <td colspan="2">3</td>
                                      </tr>
                                      <tr>
                                          <th scope="row">Email:</th>
                                          <td colspan="2">grace@fakemail.com</td>
                                      </tr>
                                      <tr>
                                          <th scope="row">Github:</th>
                                          <td colspan="2">3</td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
                  <!-- TAMMER -- Engineer-->
                  <div class="col-sm-4 p-2 d-flex justify-content-center">
                      <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem">
                          <div class="card-body">
                              <h5 class="card-title">Tammer</h5>
                              <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
                              <table class="table table-sm shadow-sm p-3 bg-body rounded border border-dark credentials">
                                  <tbody>
                                      <tr>
                                          <th scope="row">ID:</th>
                                          <td colspan="2">4</td>
                                      </tr>
                                      <tr>
                                          <th scope="row">Email:</th>
                                          <td colspan="2">tammer@fakemail.com</td>
                                      </tr>
                                      <tr>
                                          <th scope="row">Github:</th>
                                          <td colspan="2">4</td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
                  <!-- JOHN - Intern -->
                  <div class="col-sm-4 p-2 d-flex justify-content-center">
                      <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem">
                          <div class="card-body">
                              <h5 class="card-title">John</h5>
                              <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
                              <table class="table table-sm shadow-sm p-3 bg-body rounded border border-dark credentials">
                                  <tbody>
                                      <tr>
                                          <th scope="row">ID:</th>
                                          <td colspan="2">5</td>
                                      </tr>
                                      <tr>
                                          <th scope="row">Email:</th>
                                          <td colspan="2">john@fakemail.com</td>
                                      </tr>
                                      <tr>
                                          <th scope="row">School:</th>
                                          <td colspan="2">2University</td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
                  <!-- Joseph -- Volunteer-->
                  <div class="col-sm-12 p-2 d-flex justify-content-center">
                      <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem">
                          <div class="card-body">
                              <h5 class="card-title">Joseph</h5>
                              <h6 class="card-subtitle mb-2 text-muted">Fromt-end Developer</h6>
                              <table class="table table-sm shadow-sm p-3 bg-body rounded border border-dark credentials">
                                  <tbody>
                                      <tr>
                                          <th scope="row">ID:</th>
                                          <td colspan="2">6</td>
                                      </tr>
                                      <tr>
                                          <th scope="row">Email:</th>
                                          <td colspan="2">joseph@fakemail.com</td>
                                      </tr>
                                      <tr>
                                          <th scope="row">Github:</th>
                                          <td colspan="2">6</td>
                                      </tr>
                                  </tbody>
                              </table>
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

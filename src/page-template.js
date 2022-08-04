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
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="./assets/css/materialize.min.css" media="screen,projection" />
    <link rel="stylesheet" href="./assets/css/style.css" type="text/css" />
    <title>Team Builder</title>
    </head>

    <body>
    <header>
        <nav>
        <div class="nav-wrapper">
            <a href="#" class="brand-logo center">My Team</a>
        </div>
        </nav>
    </header>
    <main class="container">
        <section class="my-3">
        <div class="row">
            <div class="col m12">
            <!-- Manager -->
            <div class="row">
                <div class="col m12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                    <h4>${manager.firstName}</h4>
                    <h5 class="card-title">Manager</h5>
                    </div>
                    <div class="card-action">
                    <table>
                        <tr>
                        <th>ID:</th>
                        <td>${manager.id}</td>
                        </tr>
                        <tr>
                        <th>Email:</th>
                        <td><a href="mailto:${manager.email}">${manager.email}</a></td>
                        </tr>
                        <tr>
                        <th>Office number:</th>
                        <td>${manager.officeNumber}</td>
                        </tr>
                    </table>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div class="col s6">
            <!-- ALEC -->
            <div class="row">
                <div class="col m12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                    <h4>${engineer1.firstName}</h4>
                    <h5 class="card-title">Engineer</h5>
                    </div>
                    <div class="card-action">
                    <table>
                        <tr>
                        <th>ID:</th>
                        <td>${engineer1.id}</td>
                        </tr>
                        <tr>
                        <th>Email:</th>
                        <td><a href="mailto:${engineer1.email}">${engineer1.email}</a></td>
                        </tr>
                        <tr>
                        <th>Github:</th>
                        <td>${engineer1.github}</td>
                        </tr>
                    </table>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div class="col s6">
            <!-- GRACE - Engineer -->
            <div class="row">
                <div class="col m12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                    <h4>${engineer2.firstName}</h4>
                    <h5 class="card-title">Engineer</h5>
                    </div>
                    <div class="card-action">
                    <table>
                        <tr>
                        <th>ID:</th>
                        <td>${engineer2.id}</td>
                        </tr>
                        <tr>
                        <th>Email:</th>
                        <td><a href="mailto:${engineer2.email}">${engineer2.email}</a></td>
                        </tr>
                        <tr>
                        <th>Github:</th>
                        <td>${engineer2.github}</td>
                        </tr>
                    </table>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div class="col s6">
            <!-- TAMMER -- Engineer-->
            <div class="row">
                <div class="col m12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                    <h4>${engineer3.firstName}</h4>
                    <h5 class="card-title">Engineer</h5>
                    </div>
                    <div class="card-action">
                    <table>
                        <tr>
                        <th>ID:</th>
                        <td>${engineer3.id}</td>
                        </tr>
                        <tr>
                        <th>Email:</th>
                        <td><a href="mailto:${engineer3.email}">${engineer3.email}</a></td>
                        </tr>
                        <tr>
                        <th>Github:</th>
                        <td>${engineer3.github}</td>
                        </tr>
                    </table>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div class="col s6">
            <!-- JOHN - Intern -->
            <div class="row">
                <div class="col m12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                    <h4>${intern.firstName}</h4>
                    <h5 class="card-title">Intern</h5>
                    </div>
                    <div class="card-action">
                    <table>
                        <tr>
                        <th>ID:</th>
                        <td>${intern.id}</td>
                        </tr>
                        <tr>
                        <th>Email:</th>
                        <td><a href="mailto:${intern.email}">${intern.email}</a></td>
                        </tr>
                        <tr>
                        <th>School:</th>
                        <td>${intern.school}</td>
                        </tr>
                    </table>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </main>

    <script type="text/javascript" src="./assets/js/materialize.min.js"></script>
    </body>
    </html>
    `;
};

// const Employee = require("../lib/Employee");
// const Manager = require("../lib/Manager");
// const Engineer = require("../lib/Engineer");
// const Intern = require("../lib/Intern");

module.exports = (teamMembers, employeeIDs) => {
  const [Manager, Engineer, Intern] = teamMembers;
  const manager = Manager;
  const engineer = Engineer;
  const intern = Intern;

  return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="UTF-8" />
    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="shortcut icon" type="avatar/png" href="./assets/images/avatars/portfolio-avatar2.png" />
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
            <div class="col s12">
            <!-- Manager -->
            <div class="row">
                <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                    <h4>${manager.firstName}</h4>
                    <h5 class="card-title">Manager</h5>
                    </div>
                    <div class="card-action">
                    <table>
                        <tr>
                        <th>ID</th>
                        <td>${manager.id}</td>
                        </tr>
                        <tr>
                        <th>Email</th>
                        <td>${manager.email}</td>
                        </tr>
                        <tr>
                        <th>${manager.officeNumber}</th>
                        <td>1</td>
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
                <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                    <h4>${engineer.firstName}</h4>
                    <h5 class="card-title">Engineer</h5>
                    </div>
                    <div class="card-action">
                    <table>
                        <tr>
                        <th>ID</th>
                        <td>${engineer.id}</td>
                        </tr>
                        <tr>
                        <th>Email</th>
                        <td>${engineer.email}</td>
                        </tr>
                        <tr>
                        <th>Github</th>
                        <td>${engineer.github}</td>
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
                <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                    <h4>${engineer.firstName}</h4>
                    <h5 class="card-title">Engineer</h5>
                    </div>
                    <div class="card-action">
                    <table>
                        <tr>
                        <th>ID</th>
                        <td>${engineer.id}</td>
                        </tr>
                        <tr>
                        <th>Email</th>
                        <td>${engineer.email}</td>
                        </tr>
                        <tr>
                        <th>Github</th>
                        <td>${engineer.github}</td>
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
                <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                    <h4>${engineer.name}</h4>
                    <h5 class="card-title">Engineer</h5>
                    </div>
                    <div class="card-action">
                    <table>
                        <tr>
                        <th>ID</th>
                        <td>${engineer.id}</td>
                        </tr>
                        <tr>
                        <th>Email</th>
                        <td>${engineer.email}</td>
                        </tr>
                        <tr>
                        <th>Github</th>
                        <td>${engineer.github}</td>
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
                <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                    <h4>${intern.name}</h4>
                    <h5 class="card-title">Intern</h5>
                    </div>
                    <div class="card-action">
                    <table>
                        <tr>
                        <th>ID</th>
                        <td>${intern.id}</td>
                        </tr>
                        <tr>
                        <th>Email</th>
                        <td>${intern.email}</td>
                        </tr>
                        <tr>
                        <th>School</th>
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

    <script type="text/javascript" src="/assets/js/materialize.min.js"></script>
    </body>
    </html>
    `;
};

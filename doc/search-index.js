var searchIndex = {};
searchIndex['nphysics2df64'] = {"items":[[0,"","nphysics2df64","nphysics  [![Build Status](https://travis-ci.org/sebcrozet/nphysics.png?branch=master)](https://travis-ci.org/sebcrozet/nphysics)\n========\n**nphysics** is a 2 and 3-dimensional physics engine for games and animations. It uses\n[ncollide](https://github.com/sebcrozet/ncollide) for collision detection, and\n[nalgebra](https://github.com/sebcrozet/nalgebra) for vector/matrix math."],[0,"aliases","","Aliases for complicated parameterized types."],[4,"DefaultBroadPhase","nphysics2df64::aliases",""],[4,"DefaultCollisionDetector","",""],[0,"integration","nphysics2df64","Position and orientation update of rigid bodies."],[1,"BodyExpEulerIntegrator","nphysics2df64::integration","An explicit Euler integrator."],[1,"BodySmpEulerIntegrator","","A semi-implicit Euler integrator."],[1,"BodyForceGenerator","","A constant linear and angular force generator."],[11,"lin_acc","","",0],[11,"ang_acc","","",0],[1,"BodyDamping","","A linear and angular velocity damper."],[11,"linear_damping","","",1],[11,"angular_damping","","",1],[0,"euler","","Euler integration functions."],[3,"explicit_integrate","nphysics2df64::integration::euler","Explicit Euler integrator."],[3,"explicit_integrate_wo_rotation","","Explicit Euler integrator. This will not update the rotational components."],[3,"semi_implicit_integrate","","Semi-implicit Euler integrator."],[3,"semi_implicit_integrate_wo_rotation","","Semi-implicit Euler integrator. This will not update the rotational components."],[3,"displacement","","Computes the transformation matrix required to move an object with a `lin_vel` linear velocity,\na `ang_vil` angular velocity, and a center of mass `center_of_mass`, during the time step `dt`."],[6,"Integrator","nphysics2df64::integration","Trait implemented by every integrator."],[9,"update","","Updates the position and orientation of the object `o` after a time step of `dt`.",2],[0,"detection","nphysics2df64","Collision detection and joints."],[1,"BodiesBodies","nphysics2df64::detection","Collision detector between rigid bodies."],[11,"geom_geom_dispatcher","","",3],[11,"contacts_collector","","",3],[11,"constraints_collector","","",3],[1,"BodyBodyDispatcher","","Collision detector dispatcher for rigid bodies."],[11,"geom_dispatcher","","",4],[1,"ActivationManager","","Structure that monitors island-based activation/deactivation of objects."],[11,"threshold","","",5],[11,"mix_factor","","",5],[11,"ufind","","",5],[11,"can_deactivate","","",5],[11,"collector","","",5],[11,"to_activate","","",5],[11,"to_deactivate","","",5],[0,"constraint","","Data structure to describe a constraint between two rigid bodies."],[2,"Constraint","nphysics2df64::detection::constraint","A constraint between two rigid bodies."],[12,"RBRB","","A contact.",6],[12,"BallInSocket","","A ball-in-socket joint.",6],[12,"Fixed","","A fixed joint.",6],[10,"clone","","",6],[0,"joint","nphysics2df64::detection","Joint handling."],[1,"Anchor","nphysics2df64::detection::joint","One of the two end points of a joint."],[11,"body","","The body attached to this anchor.",7],[11,"position","","The attach position, in local coordinates of the attached body.",7],[1,"BallInSocket","","A ball-in-socket joint."],[11,"up_to_date","","",8],[11,"anchor1","","",8],[11,"anchor2","","",8],[1,"Fixed","","A joint that prevents any relative movement (linear and angular) between two objects."],[11,"up_to_date","","",9],[11,"anchor1","","",9],[11,"anchor2","","",9],[1,"JointManager","","Structure that handles creation and removal of joints."],[11,"joints","","",10],[11,"body2joints","","",10],[6,"Joint","","Trait implemented by every joint."],[9,"anchor1","","The first anchor affected by this joint.",11],[9,"anchor2","","The second anchor affected by this joint.",11],[9,"anchor1_pos","","The first attach point in global coordinates.",11],[9,"anchor2_pos","","The second attach point in global coordinates.",11],[6,"Detector","nphysics2df64::detection","Trait implemented by collision detectors."],[9,"update","","Updates the collision detector, given an (already updated) broad-phase, and an activation\nmanager.",12],[9,"interferences","","Collects every interferences detected by this collision detector.",12],[0,"resolution","nphysics2df64","Constraint resolution."],[1,"AccumulatedImpulseSolver","nphysics2df64::resolution","Constraint solver using the projected gauss seidel algorithm and warm-starting."],[11,"correction","","",13],[11,"cache","","",13],[11,"num_first_order_iter","","",13],[11,"num_second_order_iter","","",13],[11,"restitution_constraints","","",13],[11,"friction_constraints","","",13],[11,"mjLambda","","",13],[1,"Velocities","","Structure holding the result of the projected gauss seidel solver."],[11,"lv","","Linear velocity.",14],[11,"av","","Angular velocity.",14],[1,"ImpulseCache","",""],[11,"hash_prev","","",15],[11,"cache_prev","","",15],[11,"hash_next","","",15],[11,"cache_next","","",15],[11,"step","","",15],[11,"impulse_per_contact","","",15],[1,"ContactIdentifier","","The identifier of a contact stored in the impulse cache."],[11,"obj1","","",16],[11,"obj2","","",16],[11,"ccenter","","",16],[1,"VelocityConstraint","","A constraint of velocity at a point of contact."],[11,"normal","","The contact normal.",17],[11,"weighted_normal1","","The contact normal multiplied by the first body's inverse mass.",17],[11,"weighted_normal2","","The contact normal multiplied by the second body's inverse mass.",17],[11,"rot_axis1","","The first body rotation axis.",17],[11,"weighted_rot_axis1","","The first body rotation axis multiplied by its inverse inertia.",17],[11,"rot_axis2","","The second body rotation axis.",17],[11,"weighted_rot_axis2","","The second body rotation axis multiplied by its inverse inertia.",17],[11,"inv_projected_mass","","The inverse of the sum of linear and angular inertia of both bodies.",17],[11,"impulse","","The total impulse applied.",17],[11,"lobound","","The lower bound of the impulse.",17],[11,"hibound","","The upper bound of the impulse.",17],[11,"objective","","The target delta velocity.",17],[11,"id1","","The id of the first body.",17],[11,"id2","","The id of the second body.",17],[11,"friction_limit_id","","The id of the friction constraint.",17],[11,"friction_coeff","","The friction coefficient on this contact.",17],[2,"CorrectionMode","","The correction coefficient used by the constraint solver."],[12,"Velocity","","Penetration are solved by the penalty method.",18],[12,"VelocityAndPosition","","Penetration are solved by the penalty method together with a hard repositioning.",18],[12,"VelocityAndPositionThresold","","Penetration are solved by the penalty method together with a hard repositioning.",18],[3,"projected_gauss_seidel_solve","","Solve a set of velocity constraints using the projected gauss seidel solver."],[6,"Solver","","Trait implemented by constraint solvers."],[9,"solve","","Solve the set of constraints of type `I`.",19],[0,"world","nphysics2df64","The physics world."],[1,"World","nphysics2df64::world","The physics world."],[11,"bodies","","",20],[11,"forces","","",20],[11,"broad_phase","","",20],[11,"integrator","","",20],[11,"detector","","",20],[11,"sleep","","",20],[11,"joints","","",20],[11,"solver","","",20],[11,"collector","","",20],[4,"WorldBroadPhase","","The default broad phase."],[0,"object","nphysics2df64","Rigid bodies."],[1,"RigidBody","nphysics2df64::object","The rigid body structure."],[11,"state","","",21],[11,"geom","","",21],[11,"local_to_world","","",21],[11,"lin_vel","","",21],[11,"ang_vel","","",21],[11,"inv_mass","","",21],[11,"ls_inv_inertia","","",21],[11,"inv_inertia","","",21],[11,"ls_center_of_mass","","",21],[11,"center_of_mass","","",21],[11,"lin_acc","","",21],[11,"ang_acc","","",21],[11,"restitution","","",21],[11,"friction","","",21],[11,"index","","",21],[11,"activation_state","","",21],[2,"ActivationState","","The activation state of a rigid body."],[12,"Active","","The rigid body is active with a not-zero energy.",22],[12,"Inactive","","The rigid body is inactive.",22],[12,"Deleted","","The rigid body has been removed from the physics engine.",22],[2,"RigidBodyState","","The movement state of a rigid body."],[12,"Static","","The rigid body cannot move.",23],[12,"Dynamic","","The rigid body can move.",23],[0,"utils","nphysics2df64","Miscellaneous utilities."],[0,"union_find","nphysics2df64::utils","The union find algorithm."],[1,"UnionFindSet","nphysics2df64::utils::union_find","An element used by the union-find algorithm."],[11,"parent","","The parent of this union find element.",24],[11,"rank","","The rank of this union find element.",24],[3,"find","","Performs the `find` part of the union-find algorithm."],[3,"union","","Performs the `union` part of the union-find algorithm."],[10,"clone","","",24],[10,"new","","Creates a new `UnionFindSet`.",24],[10,"reinit","","Reinitialize this set.",24]],"paths":[[1,"BodyForceGenerator"],[1,"BodyDamping"],[6,"Integrator"],[1,"BodiesBodies"],[1,"BodyBodyDispatcher"],[1,"ActivationManager"],[2,"Constraint"],[1,"Anchor"],[1,"BallInSocket"],[1,"Fixed"],[1,"JointManager"],[6,"Joint"],[6,"Detector"],[1,"AccumulatedImpulseSolver"],[1,"Velocities"],[1,"ImpulseCache"],[1,"ContactIdentifier"],[1,"VelocityConstraint"],[2,"CorrectionMode"],[6,"Solver"],[1,"World"],[1,"RigidBody"],[2,"ActivationState"],[2,"RigidBodyState"],[1,"UnionFindSet"]]};
searchIndex['nphysics2df32'] = {"items":[[0,"","nphysics2df32","nphysics  [![Build Status](https://travis-ci.org/sebcrozet/nphysics.png?branch=master)](https://travis-ci.org/sebcrozet/nphysics)\n========\n**nphysics** is a 2 and 3-dimensional physics engine for games and animations. It uses\n[ncollide](https://github.com/sebcrozet/ncollide) for collision detection, and\n[nalgebra](https://github.com/sebcrozet/nalgebra) for vector/matrix math."],[0,"aliases","","Aliases for complicated parameterized types."],[4,"DefaultBroadPhase","nphysics2df32::aliases",""],[4,"DefaultCollisionDetector","",""],[0,"integration","nphysics2df32","Position and orientation update of rigid bodies."],[1,"BodyExpEulerIntegrator","nphysics2df32::integration","An explicit Euler integrator."],[1,"BodySmpEulerIntegrator","","A semi-implicit Euler integrator."],[1,"BodyForceGenerator","","A constant linear and angular force generator."],[11,"lin_acc","","",0],[11,"ang_acc","","",0],[1,"BodyDamping","","A linear and angular velocity damper."],[11,"linear_damping","","",1],[11,"angular_damping","","",1],[0,"euler","","Euler integration functions."],[3,"explicit_integrate","nphysics2df32::integration::euler","Explicit Euler integrator."],[3,"explicit_integrate_wo_rotation","","Explicit Euler integrator. This will not update the rotational components."],[3,"semi_implicit_integrate","","Semi-implicit Euler integrator."],[3,"semi_implicit_integrate_wo_rotation","","Semi-implicit Euler integrator. This will not update the rotational components."],[3,"displacement","","Computes the transformation matrix required to move an object with a `lin_vel` linear velocity,\na `ang_vil` angular velocity, and a center of mass `center_of_mass`, during the time step `dt`."],[6,"Integrator","nphysics2df32::integration","Trait implemented by every integrator."],[9,"update","","Updates the position and orientation of the object `o` after a time step of `dt`.",2],[0,"detection","nphysics2df32","Collision detection and joints."],[1,"BodiesBodies","nphysics2df32::detection","Collision detector between rigid bodies."],[11,"geom_geom_dispatcher","","",3],[11,"contacts_collector","","",3],[11,"constraints_collector","","",3],[1,"BodyBodyDispatcher","","Collision detector dispatcher for rigid bodies."],[11,"geom_dispatcher","","",4],[1,"ActivationManager","","Structure that monitors island-based activation/deactivation of objects."],[11,"threshold","","",5],[11,"mix_factor","","",5],[11,"ufind","","",5],[11,"can_deactivate","","",5],[11,"collector","","",5],[11,"to_activate","","",5],[11,"to_deactivate","","",5],[0,"constraint","","Data structure to describe a constraint between two rigid bodies."],[2,"Constraint","nphysics2df32::detection::constraint","A constraint between two rigid bodies."],[12,"RBRB","","A contact.",6],[12,"BallInSocket","","A ball-in-socket joint.",6],[12,"Fixed","","A fixed joint.",6],[10,"clone","","",6],[0,"joint","nphysics2df32::detection","Joint handling."],[1,"Anchor","nphysics2df32::detection::joint","One of the two end points of a joint."],[11,"body","","The body attached to this anchor.",7],[11,"position","","The attach position, in local coordinates of the attached body.",7],[1,"BallInSocket","","A ball-in-socket joint."],[11,"up_to_date","","",8],[11,"anchor1","","",8],[11,"anchor2","","",8],[1,"Fixed","","A joint that prevents any relative movement (linear and angular) between two objects."],[11,"up_to_date","","",9],[11,"anchor1","","",9],[11,"anchor2","","",9],[1,"JointManager","","Structure that handles creation and removal of joints."],[11,"joints","","",10],[11,"body2joints","","",10],[6,"Joint","","Trait implemented by every joint."],[9,"anchor1","","The first anchor affected by this joint.",11],[9,"anchor2","","The second anchor affected by this joint.",11],[9,"anchor1_pos","","The first attach point in global coordinates.",11],[9,"anchor2_pos","","The second attach point in global coordinates.",11],[6,"Detector","nphysics2df32::detection","Trait implemented by collision detectors."],[9,"update","","Updates the collision detector, given an (already updated) broad-phase, and an activation\nmanager.",12],[9,"interferences","","Collects every interferences detected by this collision detector.",12],[0,"resolution","nphysics2df32","Constraint resolution."],[1,"AccumulatedImpulseSolver","nphysics2df32::resolution","Constraint solver using the projected gauss seidel algorithm and warm-starting."],[11,"correction","","",13],[11,"cache","","",13],[11,"num_first_order_iter","","",13],[11,"num_second_order_iter","","",13],[11,"restitution_constraints","","",13],[11,"friction_constraints","","",13],[11,"mjLambda","","",13],[1,"Velocities","","Structure holding the result of the projected gauss seidel solver."],[11,"lv","","Linear velocity.",14],[11,"av","","Angular velocity.",14],[1,"ImpulseCache","",""],[11,"hash_prev","","",15],[11,"cache_prev","","",15],[11,"hash_next","","",15],[11,"cache_next","","",15],[11,"step","","",15],[11,"impulse_per_contact","","",15],[1,"ContactIdentifier","","The identifier of a contact stored in the impulse cache."],[11,"obj1","","",16],[11,"obj2","","",16],[11,"ccenter","","",16],[1,"VelocityConstraint","","A constraint of velocity at a point of contact."],[11,"normal","","The contact normal.",17],[11,"weighted_normal1","","The contact normal multiplied by the first body's inverse mass.",17],[11,"weighted_normal2","","The contact normal multiplied by the second body's inverse mass.",17],[11,"rot_axis1","","The first body rotation axis.",17],[11,"weighted_rot_axis1","","The first body rotation axis multiplied by its inverse inertia.",17],[11,"rot_axis2","","The second body rotation axis.",17],[11,"weighted_rot_axis2","","The second body rotation axis multiplied by its inverse inertia.",17],[11,"inv_projected_mass","","The inverse of the sum of linear and angular inertia of both bodies.",17],[11,"impulse","","The total impulse applied.",17],[11,"lobound","","The lower bound of the impulse.",17],[11,"hibound","","The upper bound of the impulse.",17],[11,"objective","","The target delta velocity.",17],[11,"id1","","The id of the first body.",17],[11,"id2","","The id of the second body.",17],[11,"friction_limit_id","","The id of the friction constraint.",17],[11,"friction_coeff","","The friction coefficient on this contact.",17],[2,"CorrectionMode","","The correction coefficient used by the constraint solver."],[12,"Velocity","","Penetration are solved by the penalty method.",18],[12,"VelocityAndPosition","","Penetration are solved by the penalty method together with a hard repositioning.",18],[12,"VelocityAndPositionThresold","","Penetration are solved by the penalty method together with a hard repositioning.",18],[3,"projected_gauss_seidel_solve","","Solve a set of velocity constraints using the projected gauss seidel solver."],[6,"Solver","","Trait implemented by constraint solvers."],[9,"solve","","Solve the set of constraints of type `I`.",19],[0,"world","nphysics2df32","The physics world."],[1,"World","nphysics2df32::world","The physics world."],[11,"bodies","","",20],[11,"forces","","",20],[11,"broad_phase","","",20],[11,"integrator","","",20],[11,"detector","","",20],[11,"sleep","","",20],[11,"joints","","",20],[11,"solver","","",20],[11,"collector","","",20],[4,"WorldBroadPhase","","The default broad phase."],[0,"object","nphysics2df32","Rigid bodies."],[1,"RigidBody","nphysics2df32::object","The rigid body structure."],[11,"state","","",21],[11,"geom","","",21],[11,"local_to_world","","",21],[11,"lin_vel","","",21],[11,"ang_vel","","",21],[11,"inv_mass","","",21],[11,"ls_inv_inertia","","",21],[11,"inv_inertia","","",21],[11,"ls_center_of_mass","","",21],[11,"center_of_mass","","",21],[11,"lin_acc","","",21],[11,"ang_acc","","",21],[11,"restitution","","",21],[11,"friction","","",21],[11,"index","","",21],[11,"activation_state","","",21],[2,"ActivationState","","The activation state of a rigid body."],[12,"Active","","The rigid body is active with a not-zero energy.",22],[12,"Inactive","","The rigid body is inactive.",22],[12,"Deleted","","The rigid body has been removed from the physics engine.",22],[2,"RigidBodyState","","The movement state of a rigid body."],[12,"Static","","The rigid body cannot move.",23],[12,"Dynamic","","The rigid body can move.",23],[0,"utils","nphysics2df32","Miscellaneous utilities."],[0,"union_find","nphysics2df32::utils","The union find algorithm."],[1,"UnionFindSet","nphysics2df32::utils::union_find","An element used by the union-find algorithm."],[11,"parent","","The parent of this union find element.",24],[11,"rank","","The rank of this union find element.",24],[3,"find","","Performs the `find` part of the union-find algorithm."],[3,"union","","Performs the `union` part of the union-find algorithm."],[10,"clone","","",24],[10,"new","","Creates a new `UnionFindSet`.",24],[10,"reinit","","Reinitialize this set.",24]],"paths":[[1,"BodyForceGenerator"],[1,"BodyDamping"],[6,"Integrator"],[1,"BodiesBodies"],[1,"BodyBodyDispatcher"],[1,"ActivationManager"],[2,"Constraint"],[1,"Anchor"],[1,"BallInSocket"],[1,"Fixed"],[1,"JointManager"],[6,"Joint"],[6,"Detector"],[1,"AccumulatedImpulseSolver"],[1,"Velocities"],[1,"ImpulseCache"],[1,"ContactIdentifier"],[1,"VelocityConstraint"],[2,"CorrectionMode"],[6,"Solver"],[1,"World"],[1,"RigidBody"],[2,"ActivationState"],[2,"RigidBodyState"],[1,"UnionFindSet"]]};

searchIndex['nphysics3df64'] = {"items":[[0,"","nphysics3df64","nphysics  [![Build Status](https://travis-ci.org/sebcrozet/nphysics.png?branch=master)](https://travis-ci.org/sebcrozet/nphysics)\n========\n**nphysics** is a 2 and 3-dimensional physics engine for games and animations. It uses\n[ncollide](https://github.com/sebcrozet/ncollide) for collision detection, and\n[nalgebra](https://github.com/sebcrozet/nalgebra) for vector/matrix math."],[0,"aliases","","Aliases for complicated parameterized types."],[4,"DefaultBroadPhase","nphysics3df64::aliases",""],[4,"DefaultCollisionDetector","",""],[0,"integration","nphysics3df64","Position and orientation update of rigid bodies."],[1,"BodyExpEulerIntegrator","nphysics3df64::integration","An explicit Euler integrator."],[1,"BodySmpEulerIntegrator","","A semi-implicit Euler integrator."],[1,"BodyForceGenerator","","A constant linear and angular force generator."],[11,"lin_acc","","",0],[11,"ang_acc","","",0],[1,"BodyDamping","","A linear and angular velocity damper."],[11,"linear_damping","","",1],[11,"angular_damping","","",1],[0,"euler","","Euler integration functions."],[3,"explicit_integrate","nphysics3df64::integration::euler","Explicit Euler integrator."],[3,"explicit_integrate_wo_rotation","","Explicit Euler integrator. This will not update the rotational components."],[3,"semi_implicit_integrate","","Semi-implicit Euler integrator."],[3,"semi_implicit_integrate_wo_rotation","","Semi-implicit Euler integrator. This will not update the rotational components."],[3,"displacement","","Computes the transformation matrix required to move an object with a `lin_vel` linear velocity,\na `ang_vil` angular velocity, and a center of mass `center_of_mass`, during the time step `dt`."],[6,"Integrator","nphysics3df64::integration","Trait implemented by every integrator."],[9,"update","","Updates the position and orientation of the object `o` after a time step of `dt`.",2],[0,"detection","nphysics3df64","Collision detection and joints."],[1,"BodiesBodies","nphysics3df64::detection","Collision detector between rigid bodies."],[11,"geom_geom_dispatcher","","",3],[11,"contacts_collector","","",3],[11,"constraints_collector","","",3],[1,"BodyBodyDispatcher","","Collision detector dispatcher for rigid bodies."],[11,"geom_dispatcher","","",4],[1,"ActivationManager","","Structure that monitors island-based activation/deactivation of objects."],[11,"threshold","","",5],[11,"mix_factor","","",5],[11,"ufind","","",5],[11,"can_deactivate","","",5],[11,"collector","","",5],[11,"to_activate","","",5],[11,"to_deactivate","","",5],[0,"constraint","","Data structure to describe a constraint between two rigid bodies."],[2,"Constraint","nphysics3df64::detection::constraint","A constraint between two rigid bodies."],[12,"RBRB","","A contact.",6],[12,"BallInSocket","","A ball-in-socket joint.",6],[12,"Fixed","","A fixed joint.",6],[10,"clone","","",6],[0,"joint","nphysics3df64::detection","Joint handling."],[1,"Anchor","nphysics3df64::detection::joint","One of the two end points of a joint."],[11,"body","","The body attached to this anchor.",7],[11,"position","","The attach position, in local coordinates of the attached body.",7],[1,"BallInSocket","","A ball-in-socket joint."],[11,"up_to_date","","",8],[11,"anchor1","","",8],[11,"anchor2","","",8],[1,"Fixed","","A joint that prevents any relative movement (linear and angular) between two objects."],[11,"up_to_date","","",9],[11,"anchor1","","",9],[11,"anchor2","","",9],[1,"JointManager","","Structure that handles creation and removal of joints."],[11,"joints","","",10],[11,"body2joints","","",10],[6,"Joint","","Trait implemented by every joint."],[9,"anchor1","","The first anchor affected by this joint.",11],[9,"anchor2","","The second anchor affected by this joint.",11],[9,"anchor1_pos","","The first attach point in global coordinates.",11],[9,"anchor2_pos","","The second attach point in global coordinates.",11],[6,"Detector","nphysics3df64::detection","Trait implemented by collision detectors."],[9,"update","","Updates the collision detector, given an (already updated) broad-phase, and an activation\nmanager.",12],[9,"interferences","","Collects every interferences detected by this collision detector.",12],[0,"resolution","nphysics3df64","Constraint resolution."],[1,"AccumulatedImpulseSolver","nphysics3df64::resolution","Constraint solver using the projected gauss seidel algorithm and warm-starting."],[11,"correction","","",13],[11,"cache","","",13],[11,"num_first_order_iter","","",13],[11,"num_second_order_iter","","",13],[11,"restitution_constraints","","",13],[11,"friction_constraints","","",13],[11,"mjLambda","","",13],[1,"Velocities","","Structure holding the result of the projected gauss seidel solver."],[11,"lv","","Linear velocity.",14],[11,"av","","Angular velocity.",14],[1,"ImpulseCache","",""],[11,"hash_prev","","",15],[11,"cache_prev","","",15],[11,"hash_next","","",15],[11,"cache_next","","",15],[11,"step","","",15],[11,"impulse_per_contact","","",15],[1,"ContactIdentifier","","The identifier of a contact stored in the impulse cache."],[11,"obj1","","",16],[11,"obj2","","",16],[11,"ccenter","","",16],[1,"VelocityConstraint","","A constraint of velocity at a point of contact."],[11,"normal","","The contact normal.",17],[11,"weighted_normal1","","The contact normal multiplied by the first body's inverse mass.",17],[11,"weighted_normal2","","The contact normal multiplied by the second body's inverse mass.",17],[11,"rot_axis1","","The first body rotation axis.",17],[11,"weighted_rot_axis1","","The first body rotation axis multiplied by its inverse inertia.",17],[11,"rot_axis2","","The second body rotation axis.",17],[11,"weighted_rot_axis2","","The second body rotation axis multiplied by its inverse inertia.",17],[11,"inv_projected_mass","","The inverse of the sum of linear and angular inertia of both bodies.",17],[11,"impulse","","The total impulse applied.",17],[11,"lobound","","The lower bound of the impulse.",17],[11,"hibound","","The upper bound of the impulse.",17],[11,"objective","","The target delta velocity.",17],[11,"id1","","The id of the first body.",17],[11,"id2","","The id of the second body.",17],[11,"friction_limit_id","","The id of the friction constraint.",17],[11,"friction_coeff","","The friction coefficient on this contact.",17],[2,"CorrectionMode","","The correction coefficient used by the constraint solver."],[12,"Velocity","","Penetration are solved by the penalty method.",18],[12,"VelocityAndPosition","","Penetration are solved by the penalty method together with a hard repositioning.",18],[12,"VelocityAndPositionThresold","","Penetration are solved by the penalty method together with a hard repositioning.",18],[3,"projected_gauss_seidel_solve","","Solve a set of velocity constraints using the projected gauss seidel solver."],[6,"Solver","","Trait implemented by constraint solvers."],[9,"solve","","Solve the set of constraints of type `I`.",19],[0,"world","nphysics3df64","The physics world."],[1,"World","nphysics3df64::world","The physics world."],[11,"bodies","","",20],[11,"forces","","",20],[11,"broad_phase","","",20],[11,"integrator","","",20],[11,"detector","","",20],[11,"sleep","","",20],[11,"joints","","",20],[11,"solver","","",20],[11,"collector","","",20],[4,"WorldBroadPhase","","The default broad phase."],[0,"object","nphysics3df64","Rigid bodies."],[1,"RigidBody","nphysics3df64::object","The rigid body structure."],[11,"state","","",21],[11,"geom","","",21],[11,"local_to_world","","",21],[11,"lin_vel","","",21],[11,"ang_vel","","",21],[11,"inv_mass","","",21],[11,"ls_inv_inertia","","",21],[11,"inv_inertia","","",21],[11,"ls_center_of_mass","","",21],[11,"center_of_mass","","",21],[11,"lin_acc","","",21],[11,"ang_acc","","",21],[11,"restitution","","",21],[11,"friction","","",21],[11,"index","","",21],[11,"activation_state","","",21],[2,"ActivationState","","The activation state of a rigid body."],[12,"Active","","The rigid body is active with a not-zero energy.",22],[12,"Inactive","","The rigid body is inactive.",22],[12,"Deleted","","The rigid body has been removed from the physics engine.",22],[2,"RigidBodyState","","The movement state of a rigid body."],[12,"Static","","The rigid body cannot move.",23],[12,"Dynamic","","The rigid body can move.",23],[0,"utils","nphysics3df64","Miscellaneous utilities."],[0,"union_find","nphysics3df64::utils","The union find algorithm."],[1,"UnionFindSet","nphysics3df64::utils::union_find","An element used by the union-find algorithm."],[11,"parent","","The parent of this union find element.",24],[11,"rank","","The rank of this union find element.",24],[3,"find","","Performs the `find` part of the union-find algorithm."],[3,"union","","Performs the `union` part of the union-find algorithm."],[10,"clone","","",24],[10,"new","","Creates a new `UnionFindSet`.",24],[10,"reinit","","Reinitialize this set.",24]],"paths":[[1,"BodyForceGenerator"],[1,"BodyDamping"],[6,"Integrator"],[1,"BodiesBodies"],[1,"BodyBodyDispatcher"],[1,"ActivationManager"],[2,"Constraint"],[1,"Anchor"],[1,"BallInSocket"],[1,"Fixed"],[1,"JointManager"],[6,"Joint"],[6,"Detector"],[1,"AccumulatedImpulseSolver"],[1,"Velocities"],[1,"ImpulseCache"],[1,"ContactIdentifier"],[1,"VelocityConstraint"],[2,"CorrectionMode"],[6,"Solver"],[1,"World"],[1,"RigidBody"],[2,"ActivationState"],[2,"RigidBodyState"],[1,"UnionFindSet"]]};

searchIndex['nphysics3df32'] = {"items":[[0,"","nphysics3df32","nphysics  [![Build Status](https://travis-ci.org/sebcrozet/nphysics.png?branch=master)](https://travis-ci.org/sebcrozet/nphysics)\n========\n**nphysics** is a 2 and 3-dimensional physics engine for games and animations. It uses\n[ncollide](https://github.com/sebcrozet/ncollide) for collision detection, and\n[nalgebra](https://github.com/sebcrozet/nalgebra) for vector/matrix math."],[0,"aliases","","Aliases for complicated parameterized types."],[4,"DefaultBroadPhase","nphysics3df32::aliases",""],[4,"DefaultCollisionDetector","",""],[0,"integration","nphysics3df32","Position and orientation update of rigid bodies."],[1,"BodyExpEulerIntegrator","nphysics3df32::integration","An explicit Euler integrator."],[1,"BodySmpEulerIntegrator","","A semi-implicit Euler integrator."],[1,"BodyForceGenerator","","A constant linear and angular force generator."],[11,"lin_acc","","",0],[11,"ang_acc","","",0],[1,"BodyDamping","","A linear and angular velocity damper."],[11,"linear_damping","","",1],[11,"angular_damping","","",1],[0,"euler","","Euler integration functions."],[3,"explicit_integrate","nphysics3df32::integration::euler","Explicit Euler integrator."],[3,"explicit_integrate_wo_rotation","","Explicit Euler integrator. This will not update the rotational components."],[3,"semi_implicit_integrate","","Semi-implicit Euler integrator."],[3,"semi_implicit_integrate_wo_rotation","","Semi-implicit Euler integrator. This will not update the rotational components."],[3,"displacement","","Computes the transformation matrix required to move an object with a `lin_vel` linear velocity,\na `ang_vil` angular velocity, and a center of mass `center_of_mass`, during the time step `dt`."],[6,"Integrator","nphysics3df32::integration","Trait implemented by every integrator."],[9,"update","","Updates the position and orientation of the object `o` after a time step of `dt`.",2],[0,"detection","nphysics3df32","Collision detection and joints."],[1,"BodiesBodies","nphysics3df32::detection","Collision detector between rigid bodies."],[11,"geom_geom_dispatcher","","",3],[11,"contacts_collector","","",3],[11,"constraints_collector","","",3],[1,"BodyBodyDispatcher","","Collision detector dispatcher for rigid bodies."],[11,"geom_dispatcher","","",4],[1,"ActivationManager","","Structure that monitors island-based activation/deactivation of objects."],[11,"threshold","","",5],[11,"mix_factor","","",5],[11,"ufind","","",5],[11,"can_deactivate","","",5],[11,"collector","","",5],[11,"to_activate","","",5],[11,"to_deactivate","","",5],[0,"constraint","","Data structure to describe a constraint between two rigid bodies."],[2,"Constraint","nphysics3df32::detection::constraint","A constraint between two rigid bodies."],[12,"RBRB","","A contact.",6],[12,"BallInSocket","","A ball-in-socket joint.",6],[12,"Fixed","","A fixed joint.",6],[10,"clone","","",6],[0,"joint","nphysics3df32::detection","Joint handling."],[1,"Anchor","nphysics3df32::detection::joint","One of the two end points of a joint."],[11,"body","","The body attached to this anchor.",7],[11,"position","","The attach position, in local coordinates of the attached body.",7],[1,"BallInSocket","","A ball-in-socket joint."],[11,"up_to_date","","",8],[11,"anchor1","","",8],[11,"anchor2","","",8],[1,"Fixed","","A joint that prevents any relative movement (linear and angular) between two objects."],[11,"up_to_date","","",9],[11,"anchor1","","",9],[11,"anchor2","","",9],[1,"JointManager","","Structure that handles creation and removal of joints."],[11,"joints","","",10],[11,"body2joints","","",10],[6,"Joint","","Trait implemented by every joint."],[9,"anchor1","","The first anchor affected by this joint.",11],[9,"anchor2","","The second anchor affected by this joint.",11],[9,"anchor1_pos","","The first attach point in global coordinates.",11],[9,"anchor2_pos","","The second attach point in global coordinates.",11],[6,"Detector","nphysics3df32::detection","Trait implemented by collision detectors."],[9,"update","","Updates the collision detector, given an (already updated) broad-phase, and an activation\nmanager.",12],[9,"interferences","","Collects every interferences detected by this collision detector.",12],[0,"resolution","nphysics3df32","Constraint resolution."],[1,"AccumulatedImpulseSolver","nphysics3df32::resolution","Constraint solver using the projected gauss seidel algorithm and warm-starting."],[11,"correction","","",13],[11,"cache","","",13],[11,"num_first_order_iter","","",13],[11,"num_second_order_iter","","",13],[11,"restitution_constraints","","",13],[11,"friction_constraints","","",13],[11,"mjLambda","","",13],[1,"Velocities","","Structure holding the result of the projected gauss seidel solver."],[11,"lv","","Linear velocity.",14],[11,"av","","Angular velocity.",14],[1,"ImpulseCache","",""],[11,"hash_prev","","",15],[11,"cache_prev","","",15],[11,"hash_next","","",15],[11,"cache_next","","",15],[11,"step","","",15],[11,"impulse_per_contact","","",15],[1,"ContactIdentifier","","The identifier of a contact stored in the impulse cache."],[11,"obj1","","",16],[11,"obj2","","",16],[11,"ccenter","","",16],[1,"VelocityConstraint","","A constraint of velocity at a point of contact."],[11,"normal","","The contact normal.",17],[11,"weighted_normal1","","The contact normal multiplied by the first body's inverse mass.",17],[11,"weighted_normal2","","The contact normal multiplied by the second body's inverse mass.",17],[11,"rot_axis1","","The first body rotation axis.",17],[11,"weighted_rot_axis1","","The first body rotation axis multiplied by its inverse inertia.",17],[11,"rot_axis2","","The second body rotation axis.",17],[11,"weighted_rot_axis2","","The second body rotation axis multiplied by its inverse inertia.",17],[11,"inv_projected_mass","","The inverse of the sum of linear and angular inertia of both bodies.",17],[11,"impulse","","The total impulse applied.",17],[11,"lobound","","The lower bound of the impulse.",17],[11,"hibound","","The upper bound of the impulse.",17],[11,"objective","","The target delta velocity.",17],[11,"id1","","The id of the first body.",17],[11,"id2","","The id of the second body.",17],[11,"friction_limit_id","","The id of the friction constraint.",17],[11,"friction_coeff","","The friction coefficient on this contact.",17],[2,"CorrectionMode","","The correction coefficient used by the constraint solver."],[12,"Velocity","","Penetration are solved by the penalty method.",18],[12,"VelocityAndPosition","","Penetration are solved by the penalty method together with a hard repositioning.",18],[12,"VelocityAndPositionThresold","","Penetration are solved by the penalty method together with a hard repositioning.",18],[3,"projected_gauss_seidel_solve","","Solve a set of velocity constraints using the projected gauss seidel solver."],[6,"Solver","","Trait implemented by constraint solvers."],[9,"solve","","Solve the set of constraints of type `I`.",19],[0,"world","nphysics3df32","The physics world."],[1,"World","nphysics3df32::world","The physics world."],[11,"bodies","","",20],[11,"forces","","",20],[11,"broad_phase","","",20],[11,"integrator","","",20],[11,"detector","","",20],[11,"sleep","","",20],[11,"joints","","",20],[11,"solver","","",20],[11,"collector","","",20],[4,"WorldBroadPhase","","The default broad phase."],[0,"object","nphysics3df32","Rigid bodies."],[1,"RigidBody","nphysics3df32::object","The rigid body structure."],[11,"state","","",21],[11,"geom","","",21],[11,"local_to_world","","",21],[11,"lin_vel","","",21],[11,"ang_vel","","",21],[11,"inv_mass","","",21],[11,"ls_inv_inertia","","",21],[11,"inv_inertia","","",21],[11,"ls_center_of_mass","","",21],[11,"center_of_mass","","",21],[11,"lin_acc","","",21],[11,"ang_acc","","",21],[11,"restitution","","",21],[11,"friction","","",21],[11,"index","","",21],[11,"activation_state","","",21],[2,"ActivationState","","The activation state of a rigid body."],[12,"Active","","The rigid body is active with a not-zero energy.",22],[12,"Inactive","","The rigid body is inactive.",22],[12,"Deleted","","The rigid body has been removed from the physics engine.",22],[2,"RigidBodyState","","The movement state of a rigid body."],[12,"Static","","The rigid body cannot move.",23],[12,"Dynamic","","The rigid body can move.",23],[0,"utils","nphysics3df32","Miscellaneous utilities."],[0,"union_find","nphysics3df32::utils","The union find algorithm."],[1,"UnionFindSet","nphysics3df32::utils::union_find","An element used by the union-find algorithm."],[11,"parent","","The parent of this union find element.",24],[11,"rank","","The rank of this union find element.",24],[3,"find","","Performs the `find` part of the union-find algorithm."],[3,"union","","Performs the `union` part of the union-find algorithm."],[10,"clone","","",24],[10,"new","","Creates a new `UnionFindSet`.",24],[10,"reinit","","Reinitialize this set.",24]],"paths":[[1,"BodyForceGenerator"],[1,"BodyDamping"],[6,"Integrator"],[1,"BodiesBodies"],[1,"BodyBodyDispatcher"],[1,"ActivationManager"],[2,"Constraint"],[1,"Anchor"],[1,"BallInSocket"],[1,"Fixed"],[1,"JointManager"],[6,"Joint"],[6,"Detector"],[1,"AccumulatedImpulseSolver"],[1,"Velocities"],[1,"ImpulseCache"],[1,"ContactIdentifier"],[1,"VelocityConstraint"],[2,"CorrectionMode"],[6,"Solver"],[1,"World"],[1,"RigidBody"],[2,"ActivationState"],[2,"RigidBodyState"],[1,"UnionFindSet"]]};

initSearch(searchIndex);
